import React, { useState } from 'react';
// Styles
import GlobalStyle from './components/GlobalStyle';
import Container from './components/Container/index';
import Heading from './components/Heading/index';
import InputField from './components/InputField/index.jsx';
import ButtonSubmit from './components/ButtonSubmit/index';
import Form from './components/Form/index'


function App() {

  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [responseData, setResponseData] = useState('');


  const handeClick = (event) => {
    event.preventDefault();
   
   let api = 'https://api.lyrics.ovh/v1/' + artist + '/' + title;

    fetch(api)
    .then(response => {
      console.log(response.status)
      console.log(response.text)
      return response.json();
    })
    .then(data => {
      console.log(data)
      setResponseData(data)
    })  
  }

  const handleNewArtist = (event) => {
    setArtist(event.target.value)
  }
  const handleNewTitle = (event) => {
    setTitle(event.target.value)
  }
  
  return (
    <>
    <GlobalStyle />
    <Heading as="h1">Find the lyrics to a song</Heading>
    <Form name="test-url-form" action="/" method="GET">
      <br />
        <label htmlFor="artist">Artist: </label>
        <InputField type="text" name="artist" id="kunstner-input" placeholder="Artist" onChange={event => handleNewArtist(event)}/>
        <label htmlFor="song-title">Title: </label>
        <InputField type="text" name="song-title" id="title-input" placeholder="Title" onChange={event => handleNewTitle(event)}/>
        <ButtonSubmit type="submit" onClick={event => handeClick(event)} >Find lyrics</ButtonSubmit>
      </Form>

      <Container as="p">{responseData.lyrics}</Container>
    </>
  )
};

export default App;