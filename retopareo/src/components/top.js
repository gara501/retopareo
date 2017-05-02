import React, { Component } from 'react';
import Banner from './banner';
import Intro from './intro';
import Nav from './nav';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: props.intro};
    console.log(this.state.visible);
  }
  render() {
    return (
      <div className='top'>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <Nav />
        </nav>
        <div className="banner">
          <Banner />
        </div>
        <div id="intro" className="intro block" >
          <div className={this.state.visible === "true" ? 'container' : 'hidden'}>
            <Intro />
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
