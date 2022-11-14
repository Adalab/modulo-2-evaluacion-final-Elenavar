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

favoritesCharacters = JSON.parse(localStorage.getItem('favorites'));
for (const favorite of favoritesCharacters) {
  renderFavoriteCharacter(favorite);
}
