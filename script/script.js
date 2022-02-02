


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
  totalItems = totalItems.concat(ingredientTerm,ustensilsTerm,appareilsTerm);
  totalItems = [...new Set(totalItems)];
  return (recettes,totalItems);
}
//filterRecettes()

async function functionRemoveIngredients(){
  recipes = await fetchSearch();
  const selectedItems = document.querySelectorAll('.selected-items .btn');
  console.log(selectedItems);

  

  console.log(totalItems);
  selectedItems.forEach(selectedIngredient => {
      selectedIngredient.addEventListener('click', e => {
        e.preventDefault();
         removeIngredients.push(selectedIngredient.innerText)
        if(removeIngredients.length >= 1){
          removeIngredients.forEach(mot => {
            totalItems.map( ingredient => {
                 if(ingredient != mot){
                    totalItems = [ingredient];
                 }
              })
          })
          totalItems.map(mot=>{
            recettes = recipes.filter(recette => recette.ingredients.map(ingredient => ingredient.ingredient.toLowerCase()).includes(mot) || recette.ustensils.map(ustensil => ustensil.toLowerCase()).includes(mot) || recette.appliance.toLowerCase().includes(mot));
          })
          displayResult(recettes);
        }
        removeIngredients.forEach(mot => {
          totalItems.map( ingredient => {
             if(ingredient === mot){
                totalItems = [];
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
