import React, { Component } from 'react';
import Exdetail from './exdetail';

class Excontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {data: props.data};
  }
  render() {
    return (
      <div className='excontainer'>
        <div className="intro">
          <h2>Reto Pareo - Fase 1</h2>
          <p>Realizar esta rutina Lunes y Jueves</p>
          <p>Semana 1 y 2: 2 circuitos</p>
          <p>Semana 3 y 4: 3 a 4 circuitos</p>
        </div>
        {this.state.data.map(function(name, index) {
          return <Exdetail title={name.title} subtitle={name.subtitle} image={name.image}></Exdetail>
        })}
      </div>
    );
  }
}

export default Excontainer;
