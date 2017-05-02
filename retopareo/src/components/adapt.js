import React, { Component } from 'react';
import Top from './top';
import Social from './social';
import Excontainer from './excontainer';
import exercisesJson from '../data/exercises.json';

class Adapt extends Component {
  constructor(props) {
    super(props);
    this.state = {phase1: exercisesJson[0], phase2:exercisesJson[1], phase3:exercisesJson[2]};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let element = e.target.classList;
    element.forEach(function(name) {
      this.activate(name);
    }, this);    
  }

  activate(element) {
    if (element === 'btn1') {
      document.querySelector('.phase1').classList.remove('hidden');
      document.querySelector('.phase2').classList.remove('hidden');
      document.querySelector('.phase3').classList.remove('hidden');
      
      document.querySelector('.phase2').classList.add('hidden');
      document.querySelector('.phase3').classList.add('hidden');
    }
    if (element === 'btn2') {
       document.querySelector('.phase1').classList.remove('hidden');
      document.querySelector('.phase2').classList.remove('hidden');
      document.querySelector('.phase3').classList.remove('hidden');
      
      document.querySelector('.phase1').classList.add('hidden');
      document.querySelector('.phase3').classList.add('hidden');
    }
    if (element === 'btn3') {
       document.querySelector('.phase1').classList.remove('hidden');
      document.querySelector('.phase2').classList.remove('hidden');
      document.querySelector('.phase3').classList.remove('hidden');
      
      document.querySelector('.phase1').classList.add('hidden');
      document.querySelector('.phase2').classList.add('hidden');
    }
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
                  Debes tener muy en cuenta la técnica de cada ejercicio, si puede tener un espejo a la mano cuando realice los ejercicios, le puede ayudar
                  a ver y corregir su postura, guiese de los videos y las imagenes que añadimos.
                </p>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Fase 1 - 4 Semanas</h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-success">Entrenamiento basado en circuitos</li>
                      <li className="list-group-item list-group-item-info">La frecuencia será de 4 días x semana</li>
                      <li className="list-group-item list-group-item-danger">Trate de realizar las series, repeticiones y tiempos que establecemos
                        en el programa, si tiene problemas con la dificultad de algún ejercicio, procure hacer una versión mas simple del mismo
                        (esto se llama regresión), añadimos algunos ejemplos en los videos.
                        Así mismo, si un ejercicio le parece muy fácil, puede realizar una versión mas difícil del mismo (esto se llama progresión).
                        Los ejercicios de progresión se recomiendan en caso de que tenga un nivel mas avanzado. 
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="workouts-buttons">
                  <a className="btn btn-primary btn1"  onClick={this.handleClick} href="#">Workout Lunes y Jueves</a>
                  <a className="btn btn-info btn2" onClick={this.handleClick} href="#">Workout Martes y Viernes</a>
                  <a className="btn btn-success btn3" onClick={this.handleClick} href="#">Workout Miercoles y Sábado</a>
                </div>
                <div className="workout-container phase1">
                  <Excontainer title={this.state.phase1.title} info={this.state.phase1.info} data={this.state.phase1.exercises}></Excontainer>
                  <iframe width="100%" height="400" src="https://www.youtube.com/embed/_HDE0n1f5TQ" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="workout-container phase2 hidden">
                  <Excontainer title={this.state.phase2.title} info={this.state.phase2.info} data={this.state.phase2.exercises}></Excontainer>
                  <iframe width="100%" height="400" src="https://www.youtube.com/embed/G6b_yLd5xi4" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="workout-container phase3 hidden">
                  <Excontainer title={this.state.phase3.title} info={this.state.phase3.info} data={this.state.phase3.exercises}></Excontainer>
                  <iframe width="100%" height="400" src="https://www.youtube.com/embed/Ix9rzsHYKfw" frameborder="0" allowfullscreen></iframe>
                </div>
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
