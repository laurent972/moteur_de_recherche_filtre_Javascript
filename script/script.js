
functionSearchTerm();
displayResult();

async function filterRecettes(){
  recipes = await fetchSearch();
  let recettes =[];
 
  recipes.filter(recipe =>{
      if(recipe.name.toLowerCase().includes(searchTerm) || recipe.description.toLowerCase().includes(searchTerm) || recipe.ingredients.filter(ingredient => ingredient.ingredient).toString().toLowerCase().includes(searchTerm)){
        recettes.push(recipe);
      }
      }
    )

    if(appareilsTerm.length > 0 ){
     recettes = recettes.filter(recette => recette.appliance.toLowerCase().includes(appareilsTerm.toString().toLowerCase()));
    }  

    if(ustensilsTerm.length > 0 ){
      ustensilsTerm.map(mot=>{
        recettes = recettes.filter(recette => recette.ustensils.map(ustensil => ustensil.toLowerCase()).includes(mot.toLowerCase()));
      })
    }  

    if(ingredientTerm.length > 0 ){
      ingredientTerm.map(mot=>{
        recettes = recettes.filter(recette => recette.ingredients.map(ingredient => ingredient.ingredient.toLowerCase()).includes(mot.toLowerCase()));
      })
    }  
  
  displayResult(recettes);
  functionRemoveIngredients();

  return (recettes);
}
//filterRecettes()

async function functionRemoveIngredients(){
  recipes = await fetchSearch();
  const selectedIngredients = document.querySelectorAll('.selected-items .btn-blue');
  const selectedAppliances = document.querySelectorAll('.selected-items .btn-greenwater');
  const selectedUstensils = document.querySelectorAll('.selected-items .btn-tangerine');

  selectedIngredients.forEach(ingredient => {
      ingredient.addEventListener('click', e =>{
          e.preventDefault();
          console.log(ingredient.innerText);
          removeIngredients.push(ingredient.innerText);
          
          console.log(ingredientTerm);
          ingredientTerm.map( term =>
            removeIngredients.forEach(remove => {
              if(term === remove ){
                  let idTerm = ingredientTerm.indexOf(term);
                  console.log(ingredientTerm.indexOf(term));
                  ingredientTerm.splice(idTerm,1);
                  console.log(ingredientTerm);
                  filterRecettes()
                  ingredient.remove();
              }
            }))
          })
      })

  selectedAppliances.forEach(appliance => {
        appliance.addEventListener('click', e =>{
            e.preventDefault();
            console.log(appliance.innerText);
            removeAppliances.push(appliance.innerText);
            
            console.log(appareilsTerm);
            appareilsTerm.map( term =>
              removeAppliances.forEach(remove => {
                if(term === remove ){
                    let idTerm = appareilsTerm.indexOf(term);
                    console.log(appareilsTerm.indexOf(term));
                    appareilsTerm.splice(idTerm,1);
                    console.log(appareilsTerm);
                    filterRecettes()
                    appliance.remove();
                }
              }))
            })
        })
  
  selectedUstensils.forEach(ustensil => {
        ustensil.addEventListener('click', e =>{
              e.preventDefault();
              console.log(ustensil.innerText);
              removeUstensils.push(ustensil.innerText);
              
              console.log(ustensilsTerm);
              ustensilsTerm.map( term =>
                removeUstensils.forEach(remove => {
                  if(term === remove ){
                      let idTerm = ustensilsTerm.indexOf(term);
                      console.log(ustensilsTerm.indexOf(term));
                      ustensilsTerm.splice(idTerm,1);
                      console.log(ustensilsTerm);
                      filterRecettes()
                      ustensil.remove();
                  }
                }))
              })
          })    

}
