import React, { Component } from 'react';
import Adapt from './components/adapt';
import Strong from './components/strong';
import Shred from './components/shred';
import Welcome from './components/welcome';
import dataJson from './data/data.json';

import { Router, Route, hashHistory } from 'react-router';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('Default props', props);
    this.data = dataJson;
    this.loadData();
  }
  static defaultProps = {
    data: null,
    month1: null,
    month2: null,
    month3: null
  }
  loadData = ()=> {
    console.log('JSON DATA', this.data);
    this.data.map((dataEx)=> {
      console.log('EX', dataEx);
    });
  }
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
