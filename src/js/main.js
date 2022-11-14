'use strict';

const list = document.querySelector('.js-list');
const favoritesList = document.querySelector('.js-list-favorites');

let allCharacters = [];
let favoritesCharacters = [];

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

function renderFavoriteCharacter(selectedCharacter) {
  favoritesList.appendChild(
    renderOneCharacter(
      selectedCharacter.name,
      selectedCharacter.status,
      selectedCharacter.img,
      selectedCharacter.char_id
    )
  );
}

function findFavoritesCharacters(event) {
  const selectedCharacter = allCharacters.find(
    (char) => char.char_id === parseInt(event.currentTarget.id)
  );
  const favoritesIndex = favoritesCharacters.findIndex(
    (char) => char.char_id === parseInt(event.currentTarget.id)
  );
  if (favoritesIndex === -1) {
    favoritesCharacters.push(selectedCharacter);
    renderFavoriteCharacter(selectedCharacter);
  }
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

fetch('https://www.breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data;
    console.log(allCharacters);
    renderAllCharacters(allCharacters);
  });

favoritesCharacters = JSON.parse(localStorage.getItem('favorites'));
for (const favorite of favoritesCharacters) {
  renderFavoriteCharacter(favorite);
}
