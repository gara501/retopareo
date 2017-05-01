import React, { Component } from 'react';
import Exdetail from './exdetail';

class Excontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      title: props.title,
      info: props.info
    };

  }
  render() {
    return (
      <div className='excontainer'>
        <div className="intro">
          <h2>{this.state.title}</h2>
          <p>{this.state.info}</p>
        </div>
        {this.state.data.map(function(name, index) {
          return <Exdetail title={name.title} subtitle={name.subtitle} image={name.image}></Exdetail>
        })}
      </div>
    );
  }
}

export default Excontainer;
