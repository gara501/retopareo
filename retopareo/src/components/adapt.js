import React, { Component } from 'react';
import Top from './top';
import Social from './social';

class Adapt extends Component {
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
                <h2>Fase 1</h2>
                <p>A quemar esas piernas!</p>
                <div className="workout-container">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Rutina del día Lunes y Jueves</h3>
                    </div>
                    <div className="panel-body">
                      <div className="panel-exercises">
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>1</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Face Pull</h3>
                            <p>20 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>2</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Sentadilla y Press</h3>
                            <p>Principiantes: 15 repeticiones</p>
                            <p>Avanzados: 20 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>3</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Lunge con vuelos con mancuerna</h3>
                            <p>Principiantes: 15 repeticiones</p>
                            <p>Avanzados: 20 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>5</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Compendio biceps - triceps</h3>
                            <p>Principiantes: 15 repeticiones</p>
                            <p>Avanzados: 20 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>6</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Pushups con remo</h3>
                            <p>Principiantes: 15 repeticiones</p>
                            <p>Avanzados: 20 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>7</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Glute bridge con press de pecho</h3>
                            <p>Principiantes: 15 repeticiones</p>
                            <p>Avanzados: 20 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>8</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Chinups</h3>
                            <p>Semana 1: Series de 5 Repeticiones</p>
                            <p>Semana 2: Series de 7 Repeticiones</p>
                            <p>Semana 3: Series de 9 Repeticiones</p>
                            <p>Semana 4: Series de 12 Repeticiones</p>
                          </div>
                          <p className="note">En caso de no poder realizar las dominadas, use la maquina asistida.</p>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>9</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Sentadilla isometrica y curl martillo</h3>
                            <p>Principiantes: 15 repeticiones</p>
                            <p>Avanzados: 20 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>10</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Leñador con mancuerna</h3>
                            <p>Principiantes: 15 repeticiones x lado</p>
                            <p>Avanzados: 20 repeticiones x lado</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/N_Gh_Zz8cMI" frameborder="0" allowfullscreen></iframe>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Descanso activo y cardio</h3>
                  </div>
                  <div className="panel-body">
                    <p>Los días intermedios, puede descansar o realizar trabajo cardiovascular, la recomendación si desea realizar cardio (obligatorio para personas
                    con sobrepeso) es la siguiente</p>
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-success">
                        <p>Principiantes</p>
                        <ul>
                          <li>Semana 1: Cardio suave, 25 minutos al finalizar la rutina.</li>
                          <li>Semana 2: Cardio suave, 25 minutos al finalizar la rutina.</li>
                          <li>Semana 3: 25 Minutos de Cardio HIIT, 1 minuto alta intensidad x 4 de baja intensidad, repetir hasta completar los 25 minutos.</li>
                          <li>Semana 3: 25 Minutos de Cardio HIIT, 1 minuto alta intensidad x 3 de baja intensidad, repetir hasta completar los 25 minutos.</li>
                        </ul>
                      </li>
                      <li className="list-group-item list-group-item-info">
                        <p>Avanzados</p>
                        <ul>
                          <li>Semana 1: 25 Minutos de Cardio HIIT, 1 minuto alta intensidad x 4 de baja intensidad, repetir hasta completar los 25 minutos.</li>
                          <li>Semana 2: 25 Minutos de Cardio HIIT, 1 minuto alta intensidad x 3 de baja intensidad, repetir hasta completar los 25 minutos.</li>
                          <li>Semana 3: 25 Minutos de Cardio HIIT, 1 minuto alta intensidad x 2 de baja intensidad, repetir hasta completar los 25 minutos.</li>
                          <li>Semana 4: 25 Minutos de Cardio HIIT, 1 minuto alta intensidad x 1 de baja intensidad, repetir hasta completar los 25 minutos.</li>
                        </ul>
                      </li>
                    </ul>
                    <p>Personas muy delgadas que deseen subir de masa muscular, no deberian de hacer mas de 20 minutos de cardio por sesión, así mismo, no se excedan con
                    los circuitos HIIT, limitenlos a máximo <strong>3 veces x semana</strong>.</p>
                  </div>
                </div>
              </div>
              <h2>Programa C</h2>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Programa C (Casa)</h3>
                </div>
                <div className="panel-body">
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-success">Nro de Circuitos: 3 a 5 (Segun su resistencia inicial)</li>
                    <li className="list-group-item list-group-item-warning">Descanso entre ejercicio: Lo necesario para recuperar el aliento.</li>
                    <li className="list-group-item list-group-item-danger">Descanso entre circuitos: 1 Minuto</li>
                    <li className="list-group-item list-group-item-danger">Realice todos los ejercicios en secuencia uno tras otro, eso es un circuito.</li>
                  </ul>
                </div>
              </div>
              <p>Workout en circuito de cuerpo completo</p>
              <div className="workout-container">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Realizar Lunes, Miercoles y Viernes</h3>
                  </div>
                  <div className="panel-body">
                    <div className="panel-exercises">
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>1</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Pushups</h3>
                          <p>15 repeticiones</p>
                        </div>
                        <p className="note">En caso de no poder realizar los pushups correctamente, hagalas sobre las rodillas. </p>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>2</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Sentadillas</h3>
                          <p>20 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>3</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Hip Thrust piernas elevadas</h3>
                          <p>20 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>4</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Chinups</h3>
                          <p>Semana 1: Series de 5 Repeticiones</p>
                          <p>Semana 2: Series de 7 Repeticiones</p>
                          <p>Semana 3: Series de 9 Repeticiones</p>
                          <p>Semana 4: Series de 12 Repeticiones</p>
                        </div>
                        <p className="note">En caso de no poder realizar las dominadas, use la máquina asistida o las variaciones recomendadas
                        como remos, remos con una mesa, o con una toalla. </p>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>5</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Lunges </h3>
                          <p>20 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>6</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Peso muerto a una pierna</h3>
                          <p>15 repeticiones x pierna</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>7</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Frog en dos tiempos</h3>
                          <p>20 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>9</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Superman</h3>
                          <p>20 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>10</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Plancha Frontal</h3>
                          <p>Principiantes: Mantener x 15 segundos</p>
                          <p>Avanzados: Mantener x 30 segundos</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>11</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Climbers</h3>
                          <p>20 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>12</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Plancha lateral</h3>
                          <p>Principiantes: Mantener x 15 segundos</p>
                          <p>Avanzados: Mantener x 30 segundos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/gmw3GKFfaus" frameborder="0" allowfullscreen></iframe>
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
