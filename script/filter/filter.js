
async function selectIngredient(){
  let listOfIngredient = document.querySelectorAll('.ingredients ul>li a');
  listOfIngredient.forEach(ingredient => {
    ingredient.addEventListener('click', (e)=>{
        selectedItems.innerHTML += 
        `
       <button class="btn btn-blue py-3 mb-2"> ${ingredient.innerText}</button>
        `
        ingredientTerm.push(ingredient.innerText);
        
        filterRecettes()
       //getMotsCles(ingredient.innerText);
      
      })   
  });
}  


async function selectAppliance(){
  let listOfAppliance = document.querySelectorAll('.appareil ul>li a');
  listOfAppliance.forEach(appliance => {
    appliance.addEventListener('click', (e)=>{
        selectedItems.innerHTML += 
        `
       <button class="btn btn-greenwater py-3 mb-2"> ${appliance.innerText}</button>
        `
        appareilsTerm.push(appliance.innerText);
      
        filterRecettes()
      })   
  });
}  

async function selectUstensil(){
  let listOfUstensil = document.querySelectorAll('.ustensils ul>li a');
  listOfUstensil.forEach(ustensil => {
    ustensil.addEventListener('click', (e)=>{
        selectedItems.innerHTML += 
        `
        <button class="btn btn-tangerine py-3 mb-2">${ustensil.innerText}</button>
        `
        ustensilsTerm.push(ustensil.innerText);
        filterRecettes();
        
      })   
  });
}  


function functionSearchTerm(){
  searchInput.addEventListener('input',(e)=>{
      searchTerm = e.target.value.toLowerCase();
      filterRecettes();
      displayIngredients(searchTerm);
      displayAppliances(searchTerm);
      displayUstensils(searchTerm);
      return searchTerm
  });
}


ingredientButton.addEventListener('input', e => {
    ingredientRequest = e.target.value.toLowerCase();
    console.log(ingredientsList);
});

appareilButton.addEventListener('keyup', e => {
  appareilRequest = e.target.value.toLowerCase();
  console.log(ingredientRequest);
});

ustensilsButton.addEventListener('keyup', e => {
  ustensilRequest = e.target.value.toLowerCase();
  console.log(ingredientRequest);
});

