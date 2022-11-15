'use strict';
function searchResults(event) {
  event.preventDefault();
  console.log(input.value);
  fetch(`https://www.breakingbadapi.com/api/characters?name=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      renderAllCharacters(data);
    });
}

button.addEventListener('click', searchResults);
