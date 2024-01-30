


export const sumCalories = document.querySelector('.sum-calorie')
export let totalCaloriesConsumed = [];


export let addFoodEated = (alimento) => {
  const foodEated = document.createElement('p')

  foodEated.textContent = `${alimento.nombre} - ${alimento.calorie}`
  totalCaloriesConsumed.push(alimento.calorie)


  // a cada elemento añadido le damos la posibilidad de eliminarse
  foodEated.addEventListener('click', () => {
    const indexToRemove = totalCaloriesConsumed.indexOf(alimento.calorie);
    if (indexToRemove !== -1) {
      totalCaloriesConsumed.splice(indexToRemove, 1);
      foodEated.remove();
    }
  });

  sumCalories.appendChild(foodEated)
}

