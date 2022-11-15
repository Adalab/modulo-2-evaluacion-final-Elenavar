'use strict';
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

function renderFavoriteCharacter(selectedCharacter) {
  const icon = document.createElement('p');
  icon.classList.add('cross');
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
}

fetch('https://www.breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((data) => {
    allCharacters = data;
    renderAllCharacters(allCharacters);
  });
