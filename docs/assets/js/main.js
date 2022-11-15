"use strict";const list=document.querySelector(".js-list"),favoritesList=document.querySelector(".js-list-favorites"),input=document.querySelector(".js-search"),button=document.querySelector(".js-button");let allCharacters=[],favoritesCharacters=[],click="";function renderOneCharacter(e,t,r,a){const s=document.createElement("article");s.classList.add("article"),s.classList.add("js-list__itemList--article"),s.setAttribute("id",a),s.classList.add(a);const c=document.createElement("li");c.classList.add("js-list__itemList");const n=document.createElement("img");n.classList.add("img");const i=document.createElement("h2"),o=document.createElement("p"),d=document.createTextNode(e),l=document.createTextNode(t);return n.setAttribute("src",r),i.appendChild(d),o.appendChild(l),s.appendChild(n),s.appendChild(i),s.appendChild(o),c.appendChild(s),c}function handleClick(e){click=e.currentTarget,click.classList.add("js-favorites"),findFavoritesCharacters(e),localStorage.setItem("favorites",JSON.stringify(favoritesCharacters)),setTimeout(()=>{click.classList.remove("js-favorites")},900)}function addEvents(){const e=document.querySelectorAll("article");for(const t of e)t.addEventListener("click",handleClick)}function renderAllCharacters(e){list.innerHTML="";for(const t of e){let e=renderOneCharacter(t.name,t.status,t.img,t.char_id);list.appendChild(e)}addEvents()}function findFavoritesCharacters(e){const t=allCharacters.find(t=>t.char_id===parseInt(e.currentTarget.id)),r=favoritesCharacters.findIndex(t=>t.char_id===parseInt(e.currentTarget.id));console.log(r),-1===r&&(favoritesCharacters.push(t),renderFavoriteCharacter(t))}function addFavoritesEvents(){const e=document.querySelectorAll(".cross");for(const t of e)t.addEventListener("click",handleDelete)}function renderFavoriteCharacter(e){const t=document.createElement("p");t.classList.add("cross"),t.setAttribute("id",e.char_id);const r=document.createTextNode("x");t.appendChild(r),favoritesList.appendChild(t),favoritesList.appendChild(renderOneCharacter(e.name,e.status,e.img,e.char_id)),addFavoritesEvents()}function handleDelete(e){localStorage.removeItem("favorites");const t=favoritesCharacters.filter(t=>t.char_id!==parseInt(e.currentTarget.id));favoritesList.innerHTML="";for(const e of t)renderFavoriteCharacter(e);localStorage.setItem("favorites",JSON.stringify(t)),favoritesCharacters=t}fetch("https://www.breakingbadapi.com/api/characters").then(e=>e.json()).then(e=>{allCharacters=e,renderAllCharacters(allCharacters)});const favoritesSaved=JSON.parse(localStorage.getItem("favorites"));if(null!==favoritesSaved){favoritesCharacters=favoritesSaved;for(const e of favoritesCharacters)renderFavoriteCharacter(e)}function searchResults(e){e.preventDefault(),console.log(input.value),fetch("https://www.breakingbadapi.com/api/characters?name="+input.value).then(e=>e.json()).then(e=>{renderAllCharacters(e)})}button.addEventListener("click",searchResults);