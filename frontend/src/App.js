import React from 'react';
import './App.css';
import Buttons from './components/button/Buttons.js'
import TopBar from './components/navbar/TopBar.js'
//routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//pages
import Home from './pages/home/Home.js'
import Homeless from './pages/homeless/Homeless.js'


function App() {
  return (
    <Router>
        <div className="App">
          <TopBar icon={'Ally'} />

          <Switch>
            <Route exact path= "/" component={Home} />
            <route exact path="/homeless" component={Homeless} />
          </Switch>

        </div>
    </Router>
  );
}

export default App;
