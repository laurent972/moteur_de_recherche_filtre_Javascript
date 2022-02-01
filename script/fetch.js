
async function fetchSearch(){
  await fetch('script/recipes.js')
  .then(results => results.json())
  .then(results => recipes = results)
  return recipes;
}