'use strict';

function renderOneCharacter(name, status, img, id) {
  //Crear articulo
  const articleElement = document.createElement('article');
  articleElement.classList.add('article');
  articleElement.classList.add('js-list__itemList--article');
  articleElement.setAttribute('id', id);
  articleElement.classList.add(id);

  const liElement = document.createElement('li');
  liElement.classList.add('js-list__itemList');

  const imgElement = document.createElement('img');
  imgElement.classList.add('img');
  const nameElement = document.createElement('h2');
  const descElement = document.createElement('p');

  //Crear nodos de texto
  const nameText = document.createTextNode(name);
  const descText = document.createTextNode(status);
  imgElement.setAttribute('src', img);

  //Añadir texto
  nameElement.appendChild(nameText);
  descElement.appendChild(descText);

  //Añadir al html
  articleElement.appendChild(imgElement);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(descElement);

  liElement.appendChild(articleElement);

  return liElement;
}

function handleClick(event) {
  event.currentTarget.classList.add('js-favorites');
  findFavoritesCharacters(event);
  localStorage.setItem('favorites', JSON.stringify(favoritesCharacters));
}

function addEvents() {
  const articles = document.querySelectorAll('article');
  for (const article of articles) {
    article.addEventListener('click', handleClick);
  }
}

function renderAllCharacters(allCharacters) {
  list.innerHTML = '';
  for (const char of allCharacters) {
    let liElement = renderOneCharacter(
      char.name,
      char.status,
      char.img,
      char.char_id
    );
    list.appendChild(liElement);
  }
  addEvents();
}
