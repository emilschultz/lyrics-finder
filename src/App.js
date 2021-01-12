import React, { useState } from 'react';

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
    <h1>Find the lyrics to a song</h1>
    <form name="test-url-form" action="/" method="GET">
      <br />
        <label htmlFor="artist">Artist: </label>
        <input type="text" name="artist" id="kunstner-input" placeholder="Artist" onChange={event => handleNewArtist(event)}/>
        <br />
        <label htmlFor="song-title">Title: </label>
        <input type="text" name="song-title" id="title-input" placeholder="Title" onChange={event => handleNewTitle(event)}/>
        <br />
        <button type="submit" onClick={event => handeClick(event)} >Find lyrics</button>
      </form>

      <p>{responseData.lyrics}</p>
    </>
  )
};

export default App;