'use strict';

const list = document.querySelector('.js-list');

fetch('https://www.breakingbadapi.com/api/characters')
  .then((response) => response.json())
  .then((characters) => {
    for (const char of characters) {
      //Crear articulo
      const articleElement = document.createElement('article');

      const liElement = document.createElement('li');
      liElement.classList.add('itemList');

      const imgElement = document.createElement('img');
      imgElement.classList.add('img');
      const nameElement = document.createElement('h2');
      const descElement = document.createElement('p');

      //Crear nodos de texto
      const nameText = document.createTextNode(char.name);
      const descText = document.createTextNode(char.status);
      imgElement.setAttribute('src', char.img);

      //Añadir texto
      nameElement.appendChild(nameText);
      descElement.appendChild(descText);

      //Añadir al html
      articleElement.appendChild(imgElement);
      articleElement.appendChild(nameElement);
      articleElement.appendChild(descElement);

      liElement.appendChild(articleElement);

      list.appendChild(liElement);

      //Events
      liElement.addEventListener('click', handleClick);
    }
  });

//Functions
function handleClick(ev) {
  ev.preventDefault();
  console.log(ev.currentTarget);
  ev.currentTarget.classList.toggle('js-favourites');
}
