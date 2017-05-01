import React, { Component } from 'react';
import Top from './top';
import Social from './social';
import Excontainer from './excontainer';
import exercisesJson from '../data/exercises.json';

class Adapt extends Component {
  constructor(props) {
    super(props);
    this.state = {phase1: exercisesJson[0], phase2:exercisesJson[1]};
    console.log('Adapt exercises', this.state.phase1);
    console.log('Adapt exercises 2', this.state.phase2);
  }
  render() {
    return (
      <div className='adapt'>
        <Top intro="false" />
        <div className="container">
          <div className='row'>
            <div className="col-lg-12 col-md-12 col-sm-12 colxs-12">
              <div className="adapt-container">
                <h2>Entrenamiento</h2>
                <p>En nuestras primeras 4 semanas, nos enfocaremos en potenciar nuestra resistencia, en especial en la zona
                  de piernas, gluteos y core, el entrenamiento será un entrenamiento de circuitos, manejando descansos muy cortos y alta intensidad.
                  Debes tener muy en cuenta la técnica de cada ejercicio, si puedes tener un espejo a la mano cuando realices los ejercicios te puede ayudar
                  a ver y corregir tu postura, en todo caso, guiate de los videos y las imagenes que añadimos.
                </p>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Fase 1 - 4 Semanas</h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-success">Entrenamiento basado en circuitos</li>
                      <li className="list-group-item list-group-item-info">La frecuencia será de 4 días x semana</li>
                      <li className="list-group-item list-group-item-danger">Trata de realizar las series, repeticiones y tiempos que establecemos
                        en el programa, si no puedes, baja tu nivel hasta que logres realizarlo, sea haciendo menos repeticiones o realizando ejercicios
                        mas simples (los cuales añadimos como ejercicios de regresión).
                        Los ejercicios de progresión se recomiendan en caso de que tengas un nivel avanzado y quieras retarte más.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="workout-container">
                  <Excontainer title={this.state.phase1.title} info={this.state.phase1.info} data={this.state.phase1.exercises}></Excontainer>
                </div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/N_Gh_Zz8cMI" frameborder="0" allowfullscreen></iframe>

                <div className="workout-container">
                  <Excontainer title={this.state.phase1.title} info={this.state.phase1.info} data={this.state.phase2.exercises}></Excontainer>
                </div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/N_Gh_Zz8cMI" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="app-footer">
        <Social />
      </div>
    </div>
    );
  }
}

export default Adapt;
