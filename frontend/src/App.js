import React from 'react';
import './App.css';
import Buttons from './components/button/Buttons.js'
import TopBar from './components/navbar/TopBar.js'
//routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//pages
import Home from './pages/home/Home.js'
import Homeless from './pages/homeless/Homeless.js'
import Mentalhealth from './pages/mentalhealth/Mentalhealth.js';
import DomesticV from './pages/domesticviolence/DomesticV.js';
import SubstanceA from './pages/substanceabuse/SubstanceA.js';
import Youth from './pages/youth/Youth.js';
import SexualA from './pages/sexualassualt/SexualA.js';
import About from './pages/about/About.js';


function App() {
  return (
    <Router>
        <div className="App">
          <TopBar />
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route exact path="/homeless" component={Homeless} />
            <Route exact path= "/domesticviolence" component={DomesticV} />
            <Route exact path= "/substanceabuse" component={SubstanceA} />
            <Route exact path= "/youth" component={Youth} />
            <Route exact path= "/sexualassault" component={SexualA} />
            <Route exact path= "/mentalhealth" component={Mentalhealth} />
            <Route exact path= "/about" component={About} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
