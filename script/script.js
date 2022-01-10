
// j'affiche toutes mes recettes
// Je saisie dans mon  input recherche un mot
// Je recherche ce mot dans mon recipes.js
// je retourne tous les elements contenant le mot

// if variable saisie === nom ingredient afficher recette ?

const articles = document.querySelector('#articles');

async function fetchSearch(){
  await fetch('script/recipes.js')
  .then(results => results.json())
  .then(results => recipes = results)
  return recipes;
}



async function recipesTraitment(){
  const recette = await fetchSearch(); 
  console.log(recette);
  recipes.forEach(recipe => {
   // recipesDisplay(recipe); 
    
    for (const property in recipe) {
      console.log(`${property}: ${recipe[property]}`);
      
    }

    console.log(Object.entries(recipe));
    
  });



}

recipesTraitment()

