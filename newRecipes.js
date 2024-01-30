
import { totalCaloriesConsumed } from "./addFoodEated.js";
import { sumCalories } from "./addFoodEated.js";
import { recetario } from "./printAlimentos.js";
import { listadoAlimentos } from "./dataBase.js";

export const recipe = document.querySelector('#recipe')


export const addNewRecipes = () => {
  const nombreAlimento = document.querySelector('#nombre');
  const imagenAlimento = document.querySelector('#imagen');
  const caloriasAlimento = document.querySelector('#calorías')
  const tipoDeAlimento = document.querySelector('#food-type')


  const divAlim = document.createElement('div');
  const divImg = document.createElement('div');
  const img = document.createElement('img');
  const nombre = document.createElement('h3');
  const tipo = document.createElement('p');
  const cal = document.createElement('p');


  divAlim.classList.add('card');


  img.src = imagenAlimento.value;
  nombre.textContent = nombreAlimento.value;
  tipo.textContent = tipoDeAlimento.value;
  cal.textContent = `${caloriasAlimento.value} cal`

  divAlim.appendChild(divImg);
  divImg.appendChild(img);
  divAlim.appendChild(nombre);
  divAlim.appendChild(tipo);
  divAlim.appendChild(cal);


  divAlim.addEventListener('click', () => {
    const foodEated = document.createElement('p')

    foodEated.textContent = `${nombreAlimento.value} - ${caloriasAlimento.value}`
    totalCaloriesConsumed.push(caloriasAlimento.value)


    foodEated.addEventListener('click', () => {
      const indexToRemove = totalCaloriesConsumed.indexOf(caloriasAlimento.value);
      if (indexToRemove !== -1) {
        totalCaloriesConsumed.splice(indexToRemove, 1);
        foodEated.remove();
      }
    });

    sumCalories.appendChild(foodEated)
  })

  // Agregamos dicha receta a nuestro listado
  // pues necesitamos actualizar el array listadoAlimentos y el localStorage con la nueva información.
  // ya que 'recetario' actúa como un contenedor visual
  listadoAlimentos.push({
    img: imagenAlimento.value,
    nombre: nombreAlimento.value,
    tipo: tipoDeAlimento.value,
    calorie: caloriasAlimento.value
  });


  // Actualiza el localStorage con la nueva lista de alimentos
  localStorage.setItem("storedRecipes", JSON.stringify(listadoAlimentos));


  recetario.appendChild(divAlim)

}