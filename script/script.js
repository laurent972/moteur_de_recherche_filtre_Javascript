
functionSearchTerm();
displayResult();

async function filterRecettes(recipes,ingredients){
  recipes = await fetchSearch();
  let recettes =[];

  recipes.filter(recipe =>{
      if(recipe.name.toLowerCase().includes(searchTerm) || recipe.description.toLowerCase().includes(searchTerm) || recipe.ingredients.filter(ingredient => ingredient.ingredient).toString().toLowerCase().includes(searchTerm)){
        recettes.push(recipe);
      }
      }
    )

    if(appareilsTerm.length > 0 ){
     recettes = recettes.filter(recette => recette.appliance.toLowerCase().includes(appareilsTerm));
    }  

    if(ustensilsTerm.length > 0 ){
      ustensilsTerm.map(mot=>{
        recettes = recettes.filter(recette => recette.ustensils.map(ustensil => ustensil.toLowerCase()).includes(mot));
      })
    }  

    if(ingredientTerm.length > 0 ){
      ingredientTerm.map(mot=>{
        recettes = recettes.filter(recette => recette.ingredients.map(ingredient => ingredient.ingredient.toLowerCase()).includes(mot));
      })
    }  
  
  displayResult(recettes);
  functionRemoveIngredients();
  return (recettes,ingredientTerm);
}
//filterRecettes()

async function functionRemoveIngredients(){
  recipes = await fetchSearch();
  const selectedIngredients = document.querySelectorAll('.selected-items .btn-blue');
  selectedIngredients.forEach(selectedIngredient => {
      selectedIngredient.addEventListener('click', e => {
        e.preventDefault();
         removeIngredients.push(selectedIngredient.innerText)
        if(removeIngredients.length >= 1){
          removeIngredients.forEach(mot => {
              ingredientTerm.map( ingredient => {
                 if(ingredient != mot){
                     ingredientTerm = [ingredient];
                 }
              })
          })
          ingredientTerm.map(mot=>{
            recettes = recipes.filter(recette => recette.ingredients.map(ingredient => ingredient.ingredient.toLowerCase()).includes(mot));
          })
          displayResult(recettes);
        }
        removeIngredients.forEach(mot => {
          ingredientTerm.map( ingredient => {
             if(ingredient === mot){
                 ingredientTerm = [];
                 recettes = recipes;
                 displayResult(recettes);
                 location.reload();
             }
          })
      })
        selectedIngredient.remove();
      })
  })
}
