import React, { Component } from 'react';

class Warcold extends Component {
  render() {
    return (
      <div className='warcold row'>
        <div className="col-lg-12 col-md-12 col-sm-12 colxs-12">
          <div className="adapt-container">
            <h2>Calentamiento y estiramiento</h2>
            <p>Al iniciar nuestro entrenamiento debemos realizar una entrada en calor, especificamente lubricando las articulaciones y dandole movilidad
            al cuerpo, al finalizar los entrenamientos haremos estiramientos estáticos, 30 segundos por cada movimiento.
            </p>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Calentamiento</h3>
              </div>
              <div className="panel-body">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/QKFIkX8qK6o" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Estiramiento Post Entrenamiento</h3>
              </div>
              <div className="panel-body">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/VRTilzF-FQs" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Warcold;
