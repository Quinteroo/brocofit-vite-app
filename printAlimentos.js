
import { totalCaloriesConsumed } from "./addFoodEated.js";
import { sumCalories } from "./addFoodEated.js";
import { addFoodEated } from "./addFoodEated.js";




export const recetario = document.querySelector('.products');

export const printAlimentos = (alimentos) => {

  recetario.innerHTML = '';

  for (const alimento of alimentos) {

    const divAlim = document.createElement('div');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const nombre = document.createElement('h3');
    const tipo = document.createElement('p');
    const cal = document.createElement('p');


    divAlim.classList.add('card');


    img.src = alimento.img
    nombre.textContent = alimento.nombre;
    tipo.textContent = alimento.tipo;
    cal.textContent = `${alimento.calorie} cal`

    divAlim.appendChild(divImg);
    divImg.appendChild(img);
    divAlim.appendChild(nombre);
    divAlim.appendChild(tipo);
    divAlim.appendChild(cal);


    // creamos el evento añadir y le damos la funcionalidad
    divAlim.addEventListener('click', () => {
      addFoodEated(alimento)
    })

    //añadimos cada ficha de alimento al recetario
    recetario.appendChild(divAlim)
  }
}

