'use strict';

const list = document.querySelector('.js-list');
let characters = [];

fetch('https://www.breakingbadapi.com/api/characters')
  .then(response => response.json())
  .then(data => {
    characters = data;
    console.log(data);
    for (const char of characters) {
      //Crear articulo
      const articleElement = document.createElement('article');

      const liElement = document.createElement('li');

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
    }
  });


