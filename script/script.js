
functionSearchTerm();
displayResult();


async function filterRecettes(){
  recipes = await fetchSearch();
  let recettes =[];

     for(let i = 0; i< recipes.length; i++){
     
        if(recipes[i].name.toLowerCase().includes(searchTerm) || recipes[i].description.toLowerCase().includes(searchTerm)){
          recettes.push(recipes[i]);
         
          for(let y = 0; y< recipes.length ; y++){
          
            for(let z = 0; z<recipes[i].ingredients.length; z++){
            
              if(recipes[i].ingredients[z].ingredient.toLowerCase()===searchTerm){
                recettes.push(recipes[i]);
              }
            }
           }
        }
    }

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


async function functionRemoveIngredients(){
  recipes = await fetchSearch();
  const selectedIngredients = document.querySelectorAll('.selected-items .btn-blue');
  const selectedAppliances = document.querySelectorAll('.selected-items .btn-greenwater');
  const selectedUstensils = document.querySelectorAll('.selected-items .btn-tangerine');

  selectedIngredients.forEach(ingredient => {
      ingredient.addEventListener('click', e =>{
          e.preventDefault();
         
          removeIngredients.push(ingredient.innerText);

          ingredientTerm.map( term =>
            removeIngredients.forEach(remove => {
              if(term === remove ){
                  let idTerm = ingredientTerm.indexOf(term);
                  //console.log(ingredientTerm.indexOf(term));
                  ingredientTerm.splice(idTerm,1);
                  
                  filterRecettes()
                  ingredient.remove();
              }
            }))
          })
      })

  selectedAppliances.forEach(appliance => {
        appliance.addEventListener('click', e =>{
            e.preventDefault();
         
            removeAppliances.push(appliance.innerText);

            appareilsTerm.map( term =>
              removeAppliances.forEach(remove => {
                if(term === remove ){
                    let idTerm = appareilsTerm.indexOf(term);
                    //console.log(appareilsTerm.indexOf(term));
                    appareilsTerm.splice(idTerm,1);
                    filterRecettes()
                    appliance.remove();
                }
              }))
            })
        })
  
  selectedUstensils.forEach(ustensil => {
        ustensil.addEventListener('click', e =>{
              e.preventDefault();
              removeUstensils.push(ustensil.innerText);
              ustensilsTerm.map( term =>
                removeUstensils.forEach(remove => {
                  if(term === remove ){
                      let idTerm = ustensilsTerm.indexOf(term);
                      ustensilsTerm.splice(idTerm,1);
                      filterRecettes()
                      ustensil.remove();
                  }
                }))
              })
          })    

}
