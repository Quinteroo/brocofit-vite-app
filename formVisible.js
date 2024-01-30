

import { recipe } from "./newRecipes.js";


export let formVisible = false;

export const showRecipeForm = () => {
  if (formVisible) {
    recipe.classList.remove('no-visible')
    formVisible = false;
  } else {
    recipe.classList.add('no-visible')
    formVisible = true;
  }
}


