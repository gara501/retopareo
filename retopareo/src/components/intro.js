import React, { Component } from 'react';
import ReactInfoCard from 'react-info-card';

class Intro extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-lg-12 col-md-12 col-sm-12 colxs-12">
          <div className="adapt-container panel panel-default">
            <h2>Bienvenidas al reto Pareo!</h2>
            <p>Bienvenidas al reto pareo de Soul4Fit y Angelica Duran, serán 8 semanas de entrenamiento y buena alimentación
            lograrás cambios perceptibles y crearás la base para continuar con un entrenamiento mas avanzado. Lo que queremos lograr es que
            mejores tus hábitos, te midas a ti misma y demuestres que en estas semanas vas a dar todo de ti para lograr un cambio real.</p>
            <h2>Entrenamiento</h2>
            <p>El entrenamiento se parte en dos ciclos de 4 semanas, en el primer ciclo se realizaran ejercicios de nivel básico-intermedio, en
              el segundo ciclo los ejercicios serán intermedio-avanzado, ten en cuenta que no vamos a usar pesas, pero si tu nivel ya es avanzado 
              puedes usarlas para incrementar la intensidad de los ejercicios, eso si no olvides comunicarte con nosotros para indicarte los cambios
              que debes realizar en caso de que quieras añadir cargas.</p>
            <p>Para nuestros entrenamientos, usaremos los calentamientos y estiramientos post entrenamiento que usamos en el 
              <a target="_blank" href="http://reto90.soul4fit.net/#/?_k=hwzsee">reto90</a></p>
            <h2>Nutrición</h2>
            <p>Toda la parte nutricional son recetas saludables las cuales puedes ir añadiendo a tu rutina alimenticia diaria. Ya que este es un programa
              general, no podemos hacer adaptaciones personalizadas, pero te garantizamos que cambiando tu alimentación de forma inteligente, usando alimentos
              cargados en vitaminas como los que te recomendamos, realizando una preparación limpia (no fritos) no vas a aguantar hambre, y vas a comer delicioso.
              Con esto pretendemos que NO sea tomado como una dieta, si no como un cambio real en tus hábitos alimenticios.
            </p>
            <h2>Consideraciones Generales</h2>
            <p>Lo primero es que debes tener un aval médico antes de iniciar con el programa, lo segundo, debes estar en buena condición de salud, es decir, sin lesiones
              osteomusculares o lesiones internas que te permitan manejar un nivel elevado de intensidad o que te impidan realizar los movimientos. En el momento que 
              inicias con el programa estás bajo tu responsabilidad, ya que como se dijo antes, es un programa general. 
            </p>
            <h3>¿Debo contar calorías y pesar la comida?</h3>
            <p>No, simplemente debe ser equilibrado con lo que come, dándole prioridad siempre a la comida natural, que no esté cargada de sal, aceite, salsas, evitar al máximo
            la comida procesada y de paquete (papas fritas, doritos, etc.) ya que lo que se busca es que las calorías consumidas sean de alimentos que le aporten
            la mayor cantidad posible de nutrientes. El conteo de macronutriéntes lo dejamos para personas que quieren ir un paso mas allá en el programa y
            desean hacer una aproximación mas exacta a lo que consumen, para ellos, recomendamos usar la aplicación MyFitnessPal
            en la cual pueden llevar un control de sus macronutrientes basado en los resultados que les arroja este <a href="http://gara501.github.io/form4fit/">formulario.</a> </p>
            <h3>Tips</h3>
            <p> A continuación enumeramos una serie de tips que deberá seguir a través del programa.</p>
              <ul className="list-group">
                <li className="list-group-item">Elimine de su alimentación la gaseosa, té de botella, jugos de botella, gatorade y energizantes, en su defecto, tome agua pura, agua de frutas, té natural
                con canela, agua con limón y hierbabuena o menta, agua con flor de jamaica, etc.</li>
                <li className="list-group-item">Nada de comida frita, prepare todo a la plancha o cocinado.</li>
                <li className="list-group-item">Evite las grasas saturadas, prefiera las grasas saludables como los aguacates, frutos secos (no se exceda), pescado (omega 3).</li>
                <li className="list-group-item">Evite los jugos, coma las frutas enteras, si desea hacer refresco, con la naranja puede exprimir una sola naranja, y complementa con menta y limón.</li>
                <li className="list-group-item">Consuma entre 2 a 3 litros de agua al día, conviertalo en un hábito.</li>
                <li className="list-group-item">Duerma lo que se necesita, recomendadas 8 horas, si no es posible, trate de hacer siestas cortas en el día.</li>
                <li className="list-group-item">Mantengase activo, si trabaja en oficina o pasa mucho tiempo sentado, haga pausas activas, movilice su cuerpo!.</li>
                <li className="list-group-item">Trate de consumir proteina en cada una de las comidas del día. Queso, huevos, carnes, frijoles, lentejas, etc.</li>
                <li className="list-group-item">Coma las veces que considere necesario, de ahí la importancia que sus comidas sean saciantes.</li>
                <li className="list-group-item">Podrás encontrar otros tips en nuestro plan de recomendación nutricional.</li>
              </ul>
            <h2>Recomendaciones</h2>
            <p>Al ser un programa general, no podemos ahondar en casos especificos, como alergias alimentarias, lesiones o casos especiales, por esta razón
            recomendamos que visite a un nutricionista para un plan alimenticio mas completo y adaptado a sus necesidades personales, así mismo, el aval
            de su médico para la realización de este programa de entrenamiento.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
