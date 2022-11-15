'use strict';
const input = document.querySelector('.js-search');
const button = document.querySelector('.js-button');

function searchResults(event) {
  event.preventDefault();
  console.log(input.value);
  fetch(`https://www.breakingbadapi.com/api/characters?name=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderAllCharacters(data);
    });
}

button.addEventListener('click', searchResults);
