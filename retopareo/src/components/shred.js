import React, { Component } from 'react';
import Top from './top';
import Social from './social';

class Shred extends Component {
  render() {
    return (
      <div className='shred'>
        <Top intro="false" />
          <div className="container">
            <div className='row'>
              <div className="col-lg-12 col-md-12 col-sm-12 colxs-12">
                <div className="adapt-container">
                  <h2>Fase 3. Definición</h2>
                  <p>En la fase de definición nos enfocaremos en rutinas mas complejas, exigentes y dinamicas, usando ejercicios
                  multiarticulares, poco descanso y circuitos mas largos. En el caso del workout de gimnasio nos enfocaremos en trabajo
                  de superseries y triseries de ejercicios complejos, todo orientado a mantener un circuito metabolico. 
                  </p>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Programa G (Gimnasio)</h3>
                    </div>
                    <div className="panel-body">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-success">Método: Trabajo x circuitos metabolicos</li>
                        <li className="list-group-item list-group-item-warning">Descanso entre ejercicio: De 30 segundos.</li>
                        <li className="list-group-item list-group-item-danger">Finalizador: Cardio HIIT x 5 minutos.</li>
                      </ul>
                    </div>
                  </div>
                  <h2>Programa G</h2>
                  <p>Días 1 y 3</p>
                  <div className="workout-container">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h3 className="panel-title">Lunes y Jueves - Torso</h3>
                      </div>
                      <div className="panel-body">
                        <div className="panel-exercises">
                          <div className="panel-exercises-block">
                            <div className="panel-item panel-exercises-block-number">
                              <div>1</div>
                            </div>
                            <div className="panel-item panel-exercises-block-exercise">
                              <h3>Press de banca + Remo Mancuernas</h3>
                              <p>3 superseries de 12 a 15 repeticiones, descanso de 30 segundos
                              entre cada super serie.</p>
                            </div>
                          </div>
                          <div className="panel-exercises-block">
                            <div className="panel-item panel-exercises-block-number">
                              <div>2</div>
                            </div>
                            <div className="panel-item panel-exercises-block-exercise">
                              <h3>Press militar con mancuerna + Sentadilla</h3>
                              <p>3 superseries de 12 a 15 repeticiones, descanso de 30 segundos
                              entre cada super serie.</p>
                            </div>
                          </div>
                          <div className="panel-exercises-block">
                            <div className="panel-item panel-exercises-block-number">
                              <div>3</div>
                            </div>
                            <div className="panel-item panel-exercises-block-exercise">
                              <h3>Pushup + Remo con mancuerna</h3>
                              <p>3 superseries de 12 a 15 repeticiones, descanso de 30 segundos
                              entre cada super serie.</p>
                            </div>
                          </div>
                          <div className="panel-exercises-block">
                            <div className="panel-item panel-exercises-block-number">
                              <div>4</div>
                            </div>
                            <div className="panel-item panel-exercises-block-exercise">
                              <h3>Sentadilla Saltando + Tijera</h3>
                              <p>3 superseries de 20 repeticiones, descanso de 30 segundos
                              entre cada super serie.</p>
                            </div>
                          </div>
                          <div className="panel-exercises-block">
                            <div className="panel-item panel-exercises-block-number">
                              <div>5</div>
                            </div>
                            <div className="panel-item panel-exercises-block-exercise">
                              <h3>Peso muerto rumano + Curl de biceps a dos manos</h3>
                              <p>3 superseries de 15 repeticiones, descanso de 30 segundos
                              entre cada super serie.</p>
                            </div>
                          </div>
                          <div className="panel-exercises-block">
                            <div className="panel-item panel-exercises-block-number">
                              <div>6</div>
                            </div>
                            <div className="panel-item panel-exercises-block-exercise">
                              <h3>Press de pecho con cintura elevada + Hip Thrust a una pierna</h3>
                              <p>3 superseries de 20 repeticiones, en el hip thrust se trabaja cada pierna, 
                              descanso de 30 segundos entre cada super serie.</p>
                            </div>
                          </div>
                          <div className="panel-exercises-block">
                            <div className="panel-item panel-exercises-block-number">
                              <div>7</div>
                            </div>
                            <div className="panel-item panel-exercises-block-exercise">
                              <h3>Compendio CORE</h3>
                              <p>De 5 a 10 segundos por ejercicio, hacer la secuencia completa sin descanso.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <iframe width="100%" height="400" src="https://www.youtube.com/embed/U48Bfq7fjnE" frameborder="0" allowfullscreen></iframe>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Descanso activo y cardio</h3>
                    </div>
                    <div className="panel-body">
                      <p>Los días de descanso son días de descanso activo, es decir, realizará trabajo cardiovscular, puede escoger entre el protocolo 1 o 2. </p>
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-success">
                          <p>Protocolo 1</p>
                          <ul>
                            <li>Semana 9: 1 Minuto alta intensidad y 2 minutos a baja intensidad, repetir 8 veces.</li>
                            <li>Semana 10: 1 Minuto alta intensidad y 1 minutos a baja intensidad, repetir 8 veces.</li>
                            <li>Semana 11: 1 Minuto alta intensidad y 30 segundos minutos a baja intensidad, repetir 8 veces.</li>
                            <li>Semana 12: 1 Minuto alta intensidad y 30 segundos a baja intensidad, repetir 10 veces.</li>
                          </ul>
                        </li>
                        <li className="list-group-item list-group-item-success">
                          <p>Protocolo 2</p>
                          <ul>
                            <li>Semana 9 y 10: 10 minutos de HIIT tipo tabata (20 segundos de trabajo x 10 de descanso x 4 minutos) + 20 minutos de cardio a media intensidad.</li>
                            <li>Semana 11 y 12: 10 minutos de HIIT tipo tabata modificada (30 segundos de trabajo x 10 de descanso x 5 minutos) + 20 minutos de cardio a media intensidad.</li>
                          </ul>
                        </li>
                      </ul>
                      <p>Personas muy delgadas que deseen subir de masa muscular, no deberian de hacer mas de 20 minutos de cardio por sesión, así mismo, no se excedan con
                      los circuitos HIIT, limitenlos a máximo <strong>3 veces x semana</strong>.</p>
                    </div>
                  </div>
                </div>
                <h2>Programa G </h2>
                <p>Días 2 y 4</p>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Martes y Viernes - Pierna</h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-success">Método: Trabajo x circuitos</li>
                      <li className="list-group-item list-group-item-warning">Descanso entre ejercicio: De 30 segundos a 1 minuto.</li>
                      <li className="list-group-item list-group-item-danger">Finalizador: Cardio.</li>
                    </ul>
                  </div>
                </div>
                <div className="workout-container">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Realizar Martes y Viernes </h3>
                    </div>
                    <div className="panel-body">
                      <div className="panel-exercises">
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>1</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Sentadilla Bulgara + press de hombro</h3>
                            <p>3 superseries de 15 repeticiones, descanso de 30 segundos
                              entre cada super serie.</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>2</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Sentadilla Globet + Peso muerto con mancuerna</h3>
                            <p>3 superseries de 15 repeticiones, descanso de 30 segundos
                              entre cada super serie.</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>3</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Saltos Largos + Pushup</h3>
                            <p>3 superseries de 10 repeticiones, descanso de 30 segundos
                              entre cada super serie.</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>4</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Sentadilla isometrica con Pulso</h3>
                            <p>3 superseries de 30 repeticiones, descanso de 30 segundos
                              entre cada super serie.</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>5</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Burpees + Rodilla cruzada en plancha </h3>
                            <p>3 superseries de 12 a 15 repeticiones, descanso de 30 segundos
                              entre cada super serie.</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>6</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Dominadas + Pushups</h3>
                            <p>3 superseries de Max de dominadas y 20 pushups, descanso de 30 segundos
                              entre cada super serie.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <iframe width="100%" height="400" src="https://www.youtube.com/embed/_EicQxyUjB4" frameborder="0" allowfullscreen></iframe>
                  <div className="alert alert-info">
                    <p>Recuerde usar pesos que le permitan manejar el numero de repeticiones propuesto. Mantenga los descansos en máximo 30 segundos. </p>
                  </div>
                  <h2>Programa C</h2>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Programa C (Casa)</h3>
                </div>
                <div className="panel-body">
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-success">Nro de Circuitos: 5 </li>
                    <li className="list-group-item list-group-item-warning">Descanso entre ejercicio: Lo necesario para recuperar el aliento
                    pero que no pase de 30 segundos.</li>
                    <li className="list-group-item list-group-item-danger">Descanso entre circuitos: 1 Minuto</li>
                    <li className="list-group-item list-group-item-danger">Realice todos los ejercicios en secuencia uno tras otro, eso es un circuito.</li>
                  </ul>
                </div>
              </div>
              <p>Workout en circuito de cuerpo completo</p>
              <div className="workout-container">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Realizar Lunes y Miercoles</h3>
                  </div>
                  <div className="panel-body">
                    <div className="panel-exercises">
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>1</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Tijera Saltando + Pushup</h3>
                          <p>10 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>2</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Plancha invertida con toque de pies</h3>
                          <p>15 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>3</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Pushups con pausa en 5</h3>
                          <p>15 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>4</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Chinups</h3>
                          <p>10 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>5</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Sentadilla Bulgara + Peso muerto </h3>
                          <p>15 repeticiones x pierna</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>6</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Jumping Jacks + Skipping</h3>
                          <p>10 veces 5 repeticiones x ejercicio</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>7</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Frog angular</h3>
                          <p>15 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>8</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Bird Dog Elevado</h3>
                          <p>10 repeticiones x lado</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>9</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Plancha dinamica</h3>
                          <p>20 Repeticiones</p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/byphP_xe7Uk" frameborder="0" allowfullscreen></iframe>
              </div>
              <div className="workout-container">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Realizar Martes y Viernes</h3>
                  </div>
                  <div className="panel-body">
                    <div className="panel-exercises">
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>1</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Giro Ruso</h3>
                          <p>20 repeticiones, se cuenta x cada lado</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>2</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Sentadilla con pausa en 5</h3>
                          <p>20 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>3</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Saltos laterales</h3>
                          <p>10 repeticiones por cada lado</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>4</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Pike pushups</h3>
                          <p>10 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>5</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Hip Thrust a una pierna </h3>
                          <p>20 repeticiones x pierna</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>6</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Chinups</h3>
                          <p>Máximo que pueda realizar</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>7</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Pushup con cadera elevada</h3>
                          <p>10 Repticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>8</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Crunch en reversa</h3>
                          <p>20 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>9</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Sentadilla con giro 180</h3>
                          <p>10 Repeticiones</p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/6vg0q0dtU4U" frameborder="0" allowfullscreen></iframe>
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

export default Shred;
