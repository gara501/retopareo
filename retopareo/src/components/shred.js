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
                <h2>Alimentación</h2>
                <p>Antes que nada queremos aclarar que toda nuestra guía nutricional está pensada para que sea muy fácil de seguir, no
                lo vea como una dieta, si no como un cambio de hábitos. Consumiendo alimentos naturales ricos en nutrientes con una preparación
                sana y que le llevara a conseguir resultados que podrá mantener en el tiempo.
                </p>
                <p>Para ver la guía completa por favor descargue nuestra <a href="alimentacion.pdf"> guía de alimentación</a></p>
                <div className="alim">
                  <a href="alimentacion.pdf">
                    <img src="images/alim.png" alt="alimentacion" />
                  </a>
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

export default Shred;
