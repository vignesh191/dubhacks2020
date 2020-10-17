import React from 'react';
import './App.css';
import TopBar from './components/navbar/TopBar.js'
//routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//pages
import Home from './pages/Home.js'


function App() {
  return (

    <Router>
        <div className="App">
          <TopBar icon={'Ally'} />

          <Switch>
            <Route exact path= "/" component={Home} />
          </Switch>

        </div>
    </Router>
  );
}

export default App;
