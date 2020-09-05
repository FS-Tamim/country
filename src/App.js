import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Countrydetail from './components/Countrydetail/Countrydetail';


function App() {
  return (
    <Router>
                <Switch>
                    <Route path="/home">
                      <Home/>
                    </Route>
                    <Route  path="/countries/:name">
                      <Countrydetail/>
                    </Route>
                    <Route exact path="/">
                      <Home/>
                    </Route>
                    <Route  path="*">
                      <NoMatch/>
                    </Route>
                </Switch>
            </Router>
    
  );
}

export default App;
