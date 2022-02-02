import {recipesDisplay} from '../script/functions/recipeDisplay.js';  
const searchInput = document.querySelector('#search-engine');
const results = document.querySelector('.articles');
let recipes = '';  
let searchTerm = '';
 




async function fetchSearch(){
  await fetch('script/recipes.js')
  .then(results => results.json())
  .then(results => recipes = results)
  return recipes;
}

// async function searchEngine(){   
//   await fetchSearch();
//   console.log(recipes); 
//   for (const n in recipes) {
//     console.log(recipes[n].name);
//     console.log(recipes[n].ingredients);
//     console.log(recipes[n].ustensils);
//     console.log(recipes[n].appliance);
//   }
// }
// searchEngine()

async function recipesTraitment(){
  const recettes = await fetchSearch(); 
  searchTerm = 'coco';
  let recetteFiltrée = recettes.filter(recipe => recipe.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

  recettes.forEach(recipe => {
   recipesDisplay(recipe.name,recipe.ingredients,recipe.description,recipe.time);  
  });
}
recipesTraitment()

searchInput.addEventListener('input',(e)=>{
  searchTerm = 'coco';
  return searchTerm
})