

//! CALCULADORA DÉFICIT CALÓRICO
const CALCULAR = document.querySelector('#calcular');

import { resultado2 } from "./deficitCalculator.js";
import { calcularDeficitCalorico } from "./deficitCalculator.js";

CALCULAR.addEventListener('click', calcularDeficitCalorico)




//! BASE DE DATOS
import { listadoAlimentos } from "./dataBase.js";



//! DINAMIC FILTER
import { foodFilter, foodOptions, filterFoodTypes, selectFoodType, createFoodTypeOptions } from "./dinamicFilter.js";

filterFoodTypes(listadoAlimentos);
createFoodTypeOptions(foodOptions);

const BUSCAR = document.querySelector('#buscar-filtro');
import { lookingFood } from "./dinamicFilter.js";  // 'search' mejor.
BUSCAR.addEventListener('click', lookingFood)


const LIMPIAR = document.querySelector('#limpiar-filtros');
import { cleanFilter } from "./dinamicFilter.js";
LIMPIAR.addEventListener('click', cleanFilter)




//! PRINT ALIMENTOS
import { recetario } from "./printAlimentos.js";
import { printAlimentos } from "./printAlimentos.js";
printAlimentos(listadoAlimentos)




//! FORM PARA INCLUIR NUEVAS RECETAS
const NAM = document.querySelector('#nam')
import { recipe } from "./newRecipes.js";
import { addNewRecipes } from "./newRecipes.js";

NAM.addEventListener('click', addNewRecipes);




//! VISIBILIDAD FORM PARA AÑADIR RECETAS
const foodForm = document.querySelector('.food-form')

import { formVisible } from "./formVisible.js";
import { showRecipeForm } from "./formVisible.js";

foodForm.addEventListener('click', showRecipeForm);



//! CALCULAR RESULTADO FINAL
const RESULTADO = document.querySelector('#resultado');

import { calcularResultadoFinal } from "./finalResult.js";

RESULTADO.addEventListener('click', calcularResultadoFinal);


