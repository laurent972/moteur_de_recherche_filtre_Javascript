function recipesDisplay(name){
  console.log(name);
  const article = document.createElement('article');
  article.classList.add('col-md-4');
  const title = document.createElement("h1");

  title.textContent= name;
  article.appendChild(title)   
  articles.appendChild(article);

}