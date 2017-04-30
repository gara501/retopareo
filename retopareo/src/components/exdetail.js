import React, { Component } from 'react';

class Exdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.title, 
      subtitle:props.subtitle,
      image:props.image };
  }
  render() {
    var d = process.env.PUBLIC_URL;
    console.log(d);
    return (
      <div className='exdetail'>
        <div className="exercise">
          <div className="exercise-title">
            <h3>{this.state.title}</h3>
          </div>
          <div className="exercise-subtitle">
            <p>{this.state.subtitle}</p>
          </div>
          <img src={this.state.image} alt="ejercicio" />
        </div>
      </div>
    );
  }
}

export default Exdetail;
