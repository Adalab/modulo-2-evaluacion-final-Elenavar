'use strict';

const list = document.querySelector('.js-list');
const favoritesList = document.querySelector('.js-list-favorites');
const input = document.querySelector('.js-search');
const button = document.querySelector('.js-button');
const buttonDelete = document.querySelector('.js-delete');

let allCharacters = [];
let favoritesCharacters = [];
let click = '';
