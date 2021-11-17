
// Je saisie dans mon  input recherche un mot
// Je recherche ce mot dans mon recipes.js
// je retourne tous les elements contenant le mot



fetch("script/recipes-copy.txt")
.then((response)=>{
        response.text()
        console.log(response);
    })



const searchEngine = document.querySelector("#search-engine");
const autoComplete = document.querySelector('#auto-complete')
const selectedButtons = document.querySelectorAll('.dropdown-item');
const selectedIngredient = document.querySelector('.selected-items');
const ingredient = document.querySelector('.selected-item')


searchEngine.addEventListener('keyup',(e)=>{
    autoComplete.innerHTML=`
    <div class="searchElement shadow px-2 pb-2 mb-2 bg-gray">
    ${e.target.value}
    </div>
    `;
    console.log(e.target.value);
});



selectedButtons.forEach((element)=>{
    let selectedItem = element.text;
    element.addEventListener('click', (e)=>{
        console.log(selectedItem);
        selectedIngredient.innerHTML=
        `
        <div class="selected-item btn btn-blue shadow px-2 pb-2 mb-2 bg-gray ">
        ${selectedItem}
           
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>  
        `
    })
});



selectedIngredient.addEventListener('click',(e)=>{
    remove()
});

function remove(){
    console.log(ingredient);
    
};
