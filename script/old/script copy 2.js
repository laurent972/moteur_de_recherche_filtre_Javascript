import {recipesDisplay} from '../script/functions/recipeDisplay.js';  
const searchInput = document.querySelector('#search-engine');
const results = document.querySelector('.articles');
const ingredients = document.querySelector('.ingredients .dropdown-menu');
const appareils = document.querySelector('.appareil .dropdown-menu');
const ustensils = document.querySelector('.ustensils .dropdown-menu');
const selectedItems = document.querySelector('.selected-items')
let recettes = '';
let recipes = '';  
let searchTerm = '';
let ingredientTerm = [];
let appareilsTerm = '';
let ustensilsTerm = '';
 
async function fetchSearch(){
  await fetch('script/recipes.js')
  .then(results => results.json())
  .then(results => recipes = results)
  return recipes;
}


searchInput.addEventListener('input',(e)=>{
    searchTerm = e.target.value;
    displayResult();
    displayIngredients()

});

function searchEngine(searchTerm, ingredientTerm, appareilsTerm, ustensilsTerm ){

}

async function displayResult(recettes){
    recettes = await fetchSearch();

    results.innerHTML = (
      recettes
      .filter(recette => recette.name.toLowerCase().includes(searchTerm.toLowerCase()) || recette.description.toLowerCase().includes(searchTerm.toLowerCase()) || recette.ingredients.filter(ingredient => ingredient.ingredient).toString().toLowerCase().includes(searchTerm.toLowerCase() )) 
      .map(recette => 
        `
        <div class="col-md-4">
        <div class="card mb-3">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#C7BEBE"></rect>
          </svg>
          <div class="d-flex px-3 pt-3 justify-content-between">
            <h5 class="card-title ">${recette.name} </h5>
            <p class="time">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
              ${recette.time} min
            </p>
          </div>
          <div class="card-body d-flex justify-content-between mb-5 flex-wrap">
          <div class="list col-md-5">
            <ul class="list-group list-group--card">
               ${recette.ingredients.map(ingredient =>'<li clas="list-group-item"> <b>' + ingredient.ingredient+'</b> : ' + ingredient.quantity +' '+ ingredient.unit + '</li>' ).join('') } 
             </ul>
          </div>  
          <div class="card-text col-md-6">
            ${recette.description}
          </div>
          </div>
         </div>
         </div>
        `
      ).join('')
    )
}
displayResult();

async function displayIngredients(){
  recettes = await fetchSearch();
  let ingredientsList = []
    recettes
    .filter(recette => recette.ingredients.map(ingredient => ingredient.ingredient).toString().toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    .map((recette) => {
     recette.ingredients.map(ingredient =>  ingredientsList = ingredientsList.concat(ingredient.ingredient.toLowerCase()))
     ingredientsList = [...new Set(ingredientsList)]
     ingredients.innerHTML = 
       
      ingredientsList.map(ingredient =>`<li><a class="dropdown-item" href="#">${ingredient}</a></li>`).join('')
     
    })
    selectItem()
  }
displayIngredients();


async function selectItem(){
  let listOfIngredient = document.querySelectorAll('.ingredients ul>li a');
  listOfIngredient.forEach(ingredient => {
    ingredient.addEventListener('click', (e)=>{
        selectedItems.innerHTML += 
        `
        ${ingredient.innerText}
        `
        return  ingredientTerm.push(ingredient.innerText);
      }) 
  });
 
}  