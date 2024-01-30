

export let resultado2;

export const calcularDeficitCalorico = (alimentos) => {
  const total = document.querySelector('.total-calories')
  total.innerHTML = '';

  let resultado1;
  let factorActividad;

  const genero = document.querySelector("#genero");
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");
  const edad = document.querySelector("#edad");
  const ejercicio = document.querySelector('#ejercicio');



  if (ejercicio.value === 'sedentario') {
    factorActividad = 1.2;
  } else if (ejercicio.value === 'bajaActividad') {
    factorActividad = 1.375;
  } else if (ejercicio.value === 'mediaActividad') {
    factorActividad = 1.55;
  } else if (ejercicio.value === 'altaActividad') {
    factorActividad = 1.725;
  }

  if (genero.value === 'hombre') {
    resultado1 = (66 + (13.7 * peso.value)) + ((5 * altura.value) - (6.8 * edad.value)) * factorActividad;
  } else if (genero.value === 'mujer') {
    resultado1 = (655 + (9.6 * peso.value)) + ((1.8 * altura.value) - (6.8 * edad.value)) * factorActividad;
  }

  let deficit = resultado1 * 0.01;

  resultado2 = resultado1 - deficit;

  let resultadoHTML = `<h3>${Math.floor(resultado2)} cal/diarias<h3>`;
  total.innerHTML += resultadoHTML;

}



