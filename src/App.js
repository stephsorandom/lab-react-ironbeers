import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home';
import AllBeers from './Components/AllBeers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import NavBar from './Components/NavBar';

function App(props) {
  return (
    <div className="App">
    <NavBar />
            <Switch>
                <Route exact path="/" render={(props) => <Home {...props} />} />
                <Route exact path="/all-beers" render={(props) => <AllBeers {...props} />} />
                <Route exact path="/random-beer" render={(props) => <RandomBeer {...props} />} />
                <Route exact path="/new-beer" render={(props) => <NewBeer {...props} />} />
          </Switch>
    </div>
  );
}

// https://ih-beers-api2.herokuapp.com/beers

export default App;