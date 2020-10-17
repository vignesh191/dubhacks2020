import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Navbar from './components/navbar/Navbar.js'
import Buttons from './components/button/Buttons.js'

=======
import TopBar from './components/navbar/TopBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 6e6b6e1a43caeddb661f5dcfc0a986a8bb2270c8

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar icon={'Ally'} />
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
=======
      <TopBar icon={'Ally'} />

>>>>>>> 6e6b6e1a43caeddb661f5dcfc0a986a8bb2270c8
    </div>
  );
}

export default App;
