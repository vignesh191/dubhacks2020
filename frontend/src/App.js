import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/navbar/TopBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TopBar icon={'Ally'} />

    </div>
  );
}

export default App;
