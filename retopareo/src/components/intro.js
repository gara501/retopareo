import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-lg-12 col-md-12 col-sm-12 colxs-12">
          <div className="adapt-container panel panel-default">
            <h2>Bienvenida al reto sin pareo!</h2>
            <p>Bienvenida al reto sin pareo de <a href="https://twitter.com/soul4fit" target="_blank">@Soul4Fit</a> y <a href="https://twitter.com/angelicaduranb" target="_blank">@angelicaduranb</a>, serán 8 semanas de entrenamiento y buena alimentación
            logrará cambios perceptibles y creará la base para continuar con un entrenamiento mas avanzado. Lo que queremos lograr es que
            mejore sus hábitos, se mida a si misma y demuestre que en estas semanas va a dar todo de si para lograr un cambio real.</p>
            <h2>Entrenamiento</h2>
            <p>El entrenamiento se parte en dos ciclos de 4 semanas, el primer ciclo se compone de ejercicios de nivel básico-intermedio, en
              el segundo ciclo los ejercicios son de nivel intermedio-avanzado, tenga en cuenta que son ejercicios con el peso corporal, pero si su nivel ya es avanzado 
              puede añadir cargas (pesas) y así incrementar la intensidad de los ejercicios, eso si no olvide comunicarse con nosotros para indicarle los cambios
              que debe realizar a la rutina si este es el caso.</p>
            <p>Para nuestros entrenamientos, usaremos los calentamientos y estiramientos post-entrenamiento que usamos en el 
              <a target="_blank" href="http://reto90.soul4fit.net/#/?_k=hwzsee">reto90</a></p>
            <h2>Nutrición</h2>
            <p>Toda la parte nutricional son recetas saludables las cuales puede ir añadiendo a su rutina alimenticia diaria. Ya que este es un programa
              general, no podemos hacer adaptaciones personalizadas, pero le garantizamos que cambiando su alimentación de forma inteligente, usando alimentos
              cargados en vitaminas como los que le recomendamos, realizando una preparación limpia (no fritos) no va a aguantar hambre, y va a comer delicioso.
              NO pretendemos reemplazar a un nutricionista profesional, es más, recomendamos que visite uno, pero si pretendemos
              que vea como con pequeños cambios puede mejorar totalmente su forma de alimentarse.
            </p>
            <h2>Consideraciones Generales</h2>
            <p>Lo primero es que  debe tener en cuenta, es obtener un un aval médico antes de iniciar con el programa, esto significa no tener lesiones
              osteomusculares o lesiones internas que le impidan realizar los ejercicios acá propuestos. Así mismo queremos que tenga en cuenta que el arrancar con este programa
              está de acuerdo con las condiciones y lo hará bajo su entera responsabilidad.
            </p>
            <h2>¿Debo contar calorías y pesar la comida?</h2>
            <p>No, simplemente debe ser equilibrado con lo que come, dándole prioridad siempre a la comida natural, que no esté cargada de sal, aceite, salsas, evitar al máximo
            la comida procesada y de paquete (papas fritas, doritos, etc.) ya que lo que se busca es que las calorías consumidas sean de alimentos que le aporten
            la mayor cantidad posible de nutrientes. El conteo de macronutriéntes lo dejamos para personas que quieren ir un paso mas allá en el programa y
            desean hacer una aproximación mas exacta a lo que consumen, para ellos, recomendamos usar la aplicación MyFitnessPal
            en la cual pueden llevar un control de sus macronutrientes basado en los resultados que les arroja este <a href="http://gara501.github.io/form4fit/">formulario.</a> </p>
            <h2>Tips</h2>
            <p> A continuación enumeramos una serie de tips los cuales se profundizan en la sección de alimentación.</p>
              <ul className="list-group">
                <li className="list-group-item">Reduzca al máximo o elimine de su alimentación la gaseosa, té de botella, jugos de botella, gatorade y energizantes, en su defecto, tome agua pura, agua de frutas, té natural
                con canela, agua con limón y hierbabuena o menta, agua con flor de jamaica, etc.</li>
                <li className="list-group-item">Nada de comida frita, prepare todo a la plancha o cocinado.</li>
                <li className="list-group-item">Evite las grasas saturadas, prefiera las grasas saludables como los aguacates, frutos secos (no se exceda), pescado (omega 3).</li>
                <li className="list-group-item">Evite los jugos, coma las frutas enteras, si desea hacer refresco, con la naranja puede exprimir una sola naranja, y complementa con hojas de menta o hierbabuena y limón.</li>
                <li className="list-group-item">Consuma suficiente agua al día, conviertalo en un hábito.</li>
                <li className="list-group-item">Duerma lo que se necesita, recomendadas 8 horas, si no es posible, trate de hacer siestas cortas en el día.</li>
                <li className="list-group-item">Mantengase activo, si trabaja en oficina o pasa mucho tiempo sentado, haga pausas activas, movilice su cuerpo!.</li>
                <li className="list-group-item">Trate de consumir proteina en cada una de las comidas del día. Queso, huevos, carnes, frijoles, lentejas, etc.</li>
                <li className="list-group-item">Coma las veces que considere necesario, de ahí la importancia que sus comidas sean saciantes (en este programa se recomiendan 5).</li>
              </ul>
            <h2>Recomendaciones</h2>
            <p>Al ser un programa general, no podemos ahondar en casos especificos, como alergias alimenticias, lesiones o casos especiales, por esta razón
            recomendamos que visite a un nutricionista para un plan alimenticio mas completo y adaptado a sus necesidades personales, así mismo, el aval
            de su médico para la realización de este programa de entrenamiento.</p>
            <p>No siendo más le damos la bienvenida, esperamos de corazón que tenga disciplina y lo complete con éxito!.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
