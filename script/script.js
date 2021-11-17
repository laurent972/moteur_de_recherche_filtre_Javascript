
// j'affiche toutes mes recettes
// Je saisie dans mon  input recherche un mot
// Je recherche ce mot dans mon recipes.js
// je retourne tous les elements contenant le mot

// if variable saisie === nom ingredient afficher recette ?


const searchEngine = document.querySelector("#search-engine");
const autoComplete = document.querySelector('#auto-complete')
const selectedButtons = document.querySelectorAll('.dropdown-item');
const selectedIngredient = document.querySelector('.selected-items');
const ingredient = document.querySelector('.selected-item');
const listRecettes = document.querySelector('.articles');


fetch("script/recipes.js")
.then((response)=>response.json())

.then((recettes)=>{
    listRecettes.innerHTML=(
        recettes.map(data=>(
            `
            <div class="col-md-4">
            <div class="card mb-3">
            ${data.name}
            ${data.description}
           ${data.ingredients}
             ${data.time}
            </div>
            </div>
            `
        )).join()
    )
});


function functionSearch(value){

};



searchEngine.addEventListener('input',(e)=>{
    autoComplete.innerHTML=`
    <div class="searchElement shadow px-2 pb-2 mb-2 bg-gray">
    ${e.target.value}
    </div>
    `;
    console.log(e.target.value);
});
