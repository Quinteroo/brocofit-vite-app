

import { resultado2 } from "./deficitCalculator.js";
import { totalCaloriesConsumed } from "./addFoodEated.js";


export const calcularResultadoFinal = () => {
  const divResultadoFinal = document.querySelector('#resultado-final');


  const fatOrFurious = Math.floor(resultado2 - totalCaloriesConsumed.reduce((a, b) => a + b, 0));
  let fatOrFuriousHTML;

  if (fatOrFurious > 0) {
    fatOrFuriousHTML = `<h2>¡Muy bien! te faltan ${fatOrFurious} calorías para llegar al límite!¡Estás en déficit 💪🏼!</h2>`;
  } else {
    fatOrFuriousHTML = `<h2>¡Vaya! hay ${-1 * fatOrFurious} calorías de más. ¿comiste chuches hoy😅🍩?</h2>`;
  }

  divResultadoFinal.innerHTML = fatOrFuriousHTML;
}