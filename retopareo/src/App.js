import React, { Component } from 'react';
import Adapt from './components/adapt';
import Shred from './components/shred';
import Welcome from './components/welcome';


import { Router, Route, hashHistory } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Welcome}></Route>
        <Route path="/workout" component={Adapt}></Route>
        <Route path="/alim" component={Shred}></Route>
      </Router>
    );
  }
}

export default App;
