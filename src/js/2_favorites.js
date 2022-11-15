'use strict';
function findFavoritesCharacters(event) {
  const selectedCharacter = allCharacters.find(
    (char) => char.char_id === parseInt(event.currentTarget.id)
  );
  const favoritesIndex = favoritesCharacters.findIndex(
    (char) => char.char_id === parseInt(event.currentTarget.id)
  );
  console.log(favoritesIndex);
  if (favoritesIndex === -1) {
    favoritesCharacters.push(selectedCharacter);
    renderFavoriteCharacter(selectedCharacter);
  }
}

function addFavoritesEvents() {
  const cross = document.querySelector('.cross');
  cross.addEventListener('click', handleDelete);
}

function renderFavoriteCharacter(selectedCharacter) {
  const icon = document.createElement('p');
  icon.classList.add('cross');
  icon.setAttribute('id', selectedCharacter.char_id);
  const x = document.createTextNode('x');
  icon.appendChild(x);
  favoritesList.appendChild(icon);
  favoritesList.appendChild(
    renderOneCharacter(
      selectedCharacter.name,
      selectedCharacter.status,
      selectedCharacter.img,
      selectedCharacter.char_id
    )
  );
  addFavoritesEvents();
}

function handleDelete(event) {
  console.log(event.currentTarget);
  localStorage.removeItem('favorites');
  const favoritesFiltered = favoritesCharacters.filter(
    (char) => char.char_id !== parseInt(event.currentTarget.id)
  );
  console.log(event.currentTarget.id);
  console.log(favoritesFiltered);
  favoritesList.innerHTML = '';
  for (const fav of favoritesFiltered) {
    renderFavoriteCharacter(fav);
  }
  localStorage.setItem('favorites', JSON.stringify(favoritesFiltered));
  favoritesCharacters = favoritesFiltered;
}

fetch('https://www.breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data;
    renderAllCharacters(allCharacters);
  });

const favoritesSaved = JSON.parse(localStorage.getItem('favorites'));

if (favoritesSaved !== null) {
  favoritesCharacters = favoritesSaved;
  for (const favorite of favoritesCharacters) {
    renderFavoriteCharacter(favorite);
  }
}
