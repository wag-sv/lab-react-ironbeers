import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={AllBeers} />
        <Route path="/beers/:id" component={BeerDetail} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
