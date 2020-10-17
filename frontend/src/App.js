import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/button/Buttons.js'
import TopBar from './components/navbar/TopBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TopBar icon={'Ally'} />
      <Buttons icon ={'button'} />
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
          Learn React
        </a>
      </header>
      <TopBar icon={'Ally'} />

    </div>
  );
}

export default App;
