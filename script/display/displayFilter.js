
// Filtre ingredients
 async function displayIngredients(){
  recettes = await fetchSearch();
    recettes
    .filter(recette => recette.ingredients.map(ingredient => ingredient.ingredient).toString().toLowerCase())
    .map((recette) => {
     recette.ingredients.map(ingredient =>  ingredientsList = ingredientsList.concat(ingredient.ingredient.toLowerCase()))
     ingredientsList = [...new Set(ingredientsList)]
     ingredients.innerHTML = 
      ingredientsList.map(ingredient =>`<li><a class="dropdown-item" href="#">${ingredient}</a></li>`).join('')
      return ingredientsList
    })
    selectIngredient();
  }
displayIngredients();


//filtre Appareils
 async function displayAppliances(){

  recettes = await fetchSearch();
    recettes
    .filter(recette => recette.appliance.toLowerCase())
    .map(recette => {
      applianceList.push(recette.appliance.toLowerCase());
      applianceList = [...new Set(applianceList)];
      appareils.innerHTML =
      applianceList.map(appliance => `<li><a class="dropdown-item" href="#">${appliance}</a><li>`).join('');
    })
    selectAppliance();
  }
  displayAppliances();


//filtre Appareils
 async function displayUstensils(){
  recettes = await fetchSearch();
    recettes
    .filter(recette => recette.ustensils.map(ustensil => ustensil).toString().toLowerCase())
    .map(recette => {
      recette.ustensils.map(ustensil =>  ustensilList = ustensilList.concat(ustensil.toLowerCase()))
      ustensilList = [...new Set(ustensilList)];
      ustensils.innerHTML =
      ustensilList.map(ustensil => `<li><a class="dropdown-item" href="#">${ustensil}</a><li>`).join('');
    })
    selectUstensil()
  }
  displayUstensils();