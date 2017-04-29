import React, { Component } from 'react';
import Top from './top';
import Social from './social';

class Strong extends Component {
  render() {
    return (
      <div className='strong'>
        <Top intro="false" />
        <div className="container">
          <div className='row'>
            <div className="col-lg-12 col-md-12 col-sm-12 colxs-12">
              <div className="adapt-container">
                <h2>Fase 2. Fortalecimiento</h2>
                <p>En la fase de fortalecimiento en especial para el workout de gimnasio, nos enfocamos en rutinas de torso-pierna e
                incrementamos 1 día de entrenamiento a nuestro programa, dejando la distribución con un día intermedio de descanso.
                Lunes y jueves entrenamos el torso, el miercoles desansamos, martes y viernes pierna, sabado y domingo descanso.
                </p>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Programa G (Gimnasio)</h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-success">Método: Trabajo x series</li>
                      <li className="list-group-item list-group-item-warning">Descanso entre ejercicio: De 30 segundos a 1 minuto.</li>
                      <li className="list-group-item list-group-item-danger">Finalizador: Cardio.</li>
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
                            <h3>Press de banca</h3>
                            <p>3 series de 12 a 15 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>2</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Press militar con mancuerna (Press Arnold)</h3>
                            <p>3 series de 12 a 15 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>3</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Remo con mancuerna</h3>
                            <p>3 series de 12 a 15 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>4</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Chinups</h3>
                            <p>3 series MAX (Máximo nro de repeticiones posible)</p>
                            <p>Si hace la variación en polea: 3 series de 12 a 15 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>5</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Vuelos con mancuerna para hombro sentado</h3>
                            <p>3 series de 12 a 15 repeticiones</p>
                          </div>
                        </div>
                        <div className="panel-exercises-block">
                          <div className="panel-item panel-exercises-block-number">
                            <div>6</div>
                          </div>
                          <div className="panel-item panel-exercises-block-exercise">
                            <h3>Face Pull</h3>
                            <p>3 series de 12 a 15 repeticiones</p>
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
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/g5xdtkiP-uI" frameborder="0" allowfullscreen></iframe>
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
                          <li>Semana 5: 1 Minuto alta intensidad y 4 minutos a baja intensidad, repetir 4 veces.</li>
                          <li>Semana 6: 1 Minuto alta intensidad y 3 minutos a baja intensidad, repetir 6 veces.</li>
                          <li>Semana 7: 1 Minuto alta intensidad y 2 minutos a baja intensidad, repetir 8 veces.</li>
                          <li>Semana 8: 1 Minuto alta intensidad y 1 minutos a baja intensidad, repetir 10 veces.</li>
                        </ul>
                      </li>
                      <li className="list-group-item list-group-item-success">
                        <p>Protocolo 2</p>
                        <ul>
                          <li>Semana 5 y 6: 8 minutos de HIIT tipo tabata (20 segundos de trabajo x 10 de descanso x 4 minutos) + 20 minutos de cardio a media intensidad.</li>
                          <li>Semana 7 y 8: 10 minutos de HIIT tipo tabata (20 segundos de trabajo x 10 de descanso x 5 minutos) + 25 minutos de cardio a media intensidad.</li>
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
                    <li className="list-group-item list-group-item-success">Método: Trabajo x series</li>
                    <li className="list-group-item list-group-item-warning">Descanso entre ejercicio: De 30 segundos a 1 minuto.</li>
                    <li className="list-group-item list-group-item-danger">Finalizador: Cardio.</li>
                  </ul>
                </div>
              </div>
              <div className="workout-container">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Realizar Martes y Viernes (Pierna)</h3>
                  </div>
                  <div className="panel-body">
                    <div className="panel-exercises">
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>1</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Hip Thrust Elevado</h3>
                          <p>3 series de 20 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>2</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Sentadillas</h3>
                          <p>4 series de 15 a 20 repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>3</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Desplantes Alternados</h3>
                          <p>4 series de 10 a 15 repeticiones por pierna</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>4</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Peso muerto rumano</h3>
                          <p>4 Series de 10 a 15 Repeticiones</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>5</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Step Ups </h3>
                          <p>4 Series de 10 a 15 Repeticiones por pierna</p>
                        </div>
                      </div>
                      <div className="panel-exercises-block">
                        <div className="panel-item panel-exercises-block-number">
                          <div>6</div>
                        </div>
                        <div className="panel-item panel-exercises-block-exercise">
                          <h3>Elevación de pantorrilla</h3>
                          <p>4 series de 15 a 20 repeticiones</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/BaHQjmbanaE" frameborder="0" allowfullscreen></iframe>
                <div className="alert alert-info">
                  <p>Recuerde usar pesos que le permitan manejar el numero de repeticiones propuesto. Mantenga los descansos siempre entre
                  30 segundos y 1 minuto. </p>
                </div>
                <div className="alert alert-danger">
                  <p>El programa C se mantiene igual que en el primer mes, solo se deben reducir los tiempos de descanso entre ejercicios y mantener
                  el mayor número de circuitos posible( 5 recomendado ). </p>
                </div>
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

export default Strong;
