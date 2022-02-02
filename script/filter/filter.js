
async function selectIngredient(){
  let listOfIngredient = document.querySelectorAll('.ingredients ul>li a');
  listOfIngredient.forEach(ingredient => {
    ingredient.addEventListener('click', (e)=>{
        selectedItems.innerHTML += 
        `
       <button class="btn btn-blue py-3 mb-2"> ${ingredient.innerText}</button>
        `
        ingredientTerm.push(ingredient.innerText);
        
        filterRecettes();
        ingredientButton.classList.remove('clicked');
        ingredients.classList.remove('displayListitems');
        imgDropI.classList.remove('clicked')   
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
      
        filterRecettes();
        appareilButton.classList.remove('clicked');
        appareils.classList.remove('displayListitems');
        imgDropA.classList.remove('clicked')  
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
        ustensilsButton.classList.remove('clicked');
        ustensils.classList.remove('displayListitems');
        imgDropU.classList.remove('clicked')  
        
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
    let results = [];
    
        results = ingredientsList.filter((item) => {
            return item.toLowerCase().includes(ingredientRequest)
        })
    
    ingredients.innerHTML =  
     results.map(item => `<li><a class="dropdown-item" href="#">${item}</a></li>`).join('');
     selectIngredient()

});


appareilButton.addEventListener('keyup', e => {
  appareilRequest = e.target.value.toLowerCase();
  console.log(ingredientRequest);
});

ustensilsButton.addEventListener('keyup', e => {
  ustensilRequest = e.target.value.toLowerCase();
  console.log(ingredientRequest);
});



ingredientButton.addEventListener('click', e => {
  ingredients.classList.toggle('displayListitems');
  ingredientButton.classList.toggle('clicked');
  imgDropI.classList.toggle('clicked')
});


appareilButton.addEventListener('click', e => {
  appareils.classList.toggle('displayListitems');
  appareilButton.classList.toggle('clicked');
  imgDropA.classList.toggle('clicked')
});


ustensilsButton.addEventListener('click', e => {
  ustensils.classList.toggle('displayListitems');
  ustensilsButton.classList.toggle('clicked');
  imgDropU.classList.toggle('clicked')
});
