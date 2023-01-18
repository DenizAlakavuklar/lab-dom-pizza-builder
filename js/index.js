// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}


function renderGreenPeppers()  {
  document.querySelectorAll('.green-pepper').forEach((oneGpepper) => {
    if (state.greenPeppers) {
      oneGpepper.style.visibility = 'visible';
    } else {
      oneGpepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {const oneWsauce = document.querySelector('.sauce')
if (state.whiteSauce === false ) {
  oneWsauce.classList.add("sauce-white")
} else {
  oneWsauce.classList.remove('sauce-white')
}
}
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {const oneGFcrust = document.querySelector('.crust')
if (state.glutenFreeCrust === false ) {
  oneGFcrust.classList.add("crust-gluten-free")
} else {
  oneGFcrust.classList.remove('crust-gluten-free')
}
}

function renderButtons() {
  const buttons = document.querySelector('.btn')
  if (state.pepperoni === true) {buttons.classList.add("active") }
  else {buttons.classList.remove("active")}
  if (state.mushrooms === true) {buttons.classList.add("active") }
  else {buttons.classList.remove("active")}
  if (state.greenPeppers === true) {buttons.classList.add("active") }
  else {buttons.classList.remove("active")}
  if (state.whiteSauce === true) {buttons.classList.add("active") }
  else {buttons.classList.remove("active")}
  if (state.glutenFreeCrust === true) {buttons.classList.add("active") }
  else {buttons.classList.remove("active")}
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});