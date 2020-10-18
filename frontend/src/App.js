import React from 'react';
import './App.css';
import Buttons from './components/button/Buttons.js'
import TopBar from './components/navbar/TopBar.js'
//routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//pages

import Home from './pages/home/Home.js'
import Homeless from './pages/homeless/Homeless.js'
import MentalHealth from './pages/MentalHealth';


function App() {
  return (
    <Router>
        <div className="App">
          <TopBar icon={'Ally'} />
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route exact path="/homeless" component={Homeless} />
            <Route exact path= "/mentalhealth" component={MentalHealth} />
          </Switch>

        </div>
    </Router>
  );
}

export default App;
