const searchInput = document.querySelector('#search-engine');
const results = document.querySelector('.articles');
const ingredients = document.querySelector('.ingredients .dropdown-menu');
const appareils = document.querySelector('.appareil .dropdown-menu');
const ustensils = document.querySelector('.ustensils .dropdown-menu');
const selectedItems = document.querySelector('.selected-items');
const searchButton = document.querySelector('.btn.search');

const ingredientButton = document.getElementById('search-ingredient')
const appareilButton = document.querySelector('.appareil .form-button');
const ustensilsButton = document.querySelector('.ustensils .form-button');

const imgDropI = document.querySelector('.imgDrop.ingredient');
const imgDropA = document.querySelector('.imgDrop.appareil');
const imgDropU = document.querySelector('.imgDrop.ustensils');



let recettes = '';
let recipes = '';  
let searchTerm = '';
let ingredientRequest='';
let ingredientTerm = [];
let appareilsTerm = [];
let ustensilsTerm = [];

let listeMotCles = [];
let removeIngredients =[];
let totalItems = [];

let ingredientsList = [];
let applianceList = [];
let ustensilList = [];


