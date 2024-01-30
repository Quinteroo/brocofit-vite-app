

import { listadoAlimentos } from "./dataBase.js";
import { printAlimentos } from "./printAlimentos.js";

export const foodOptions = [];

export const foodFilter = document.querySelector('#food-filter');
const inputCalMax = document.querySelector('#cal-max');


// paso 1: filtramos la lista de alimentos y hacemos una solo con los tipos

export const filterFoodTypes = (foodList) => {
  foodOptions.splice(0);
  for (let i = 0; i < foodList.length; i++) {
    if (!foodOptions.includes(foodList[i].tipo)) {
      foodOptions.push(foodList[i].tipo)
    }
  }
  console.log(foodOptions)
}


//paso 2: añadimos las opciones al select con cada tipo de la nueva lista
export let selectFoodType = document.querySelector('#food-filter');

export const createFoodTypeOptions = (filteredFoodList) => {

  for (const foodOption of filteredFoodList) {
    const option = document.createElement('option');

    option.textContent = foodOption;

    selectFoodType.appendChild(option)
  }
}


//paso 3: damos funcionalidad a los filtros
export const lookingFood = () => {
  let selected = listadoAlimentos.filter((obj) => foodFilter.value === obj.tipo && obj.calorie < inputCalMax.value)
  printAlimentos(selected)
}


export const cleanFilter = () => {
  inputCalMax.value = '';
  foodFilter.value = 'todos';
  printAlimentos(listadoAlimentos);
}



