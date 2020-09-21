import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 1
          Learn react 2h
        </a>
      </header>
      <div className="test">
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7qQG2hCGiwy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div>
        <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=false&width=700&height=350&color=007FEB&layout=dark&size=medium&type=radio&id=artist-13755123&app_id=1" width="700" height="350"></iframe>
      </div>

    </div>

  );
}

export default App;
