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
        <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=playlist&id=30595446&app_id=1" width="300" height="300"></iframe>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/8tpwt3nB7nM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    </div>

  );
}

export default App;
