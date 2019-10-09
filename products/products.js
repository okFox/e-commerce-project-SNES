import gameList from './data/games.js';
import renderCarts from './render-carts.js';



const list = document.getElementById('carts');

for (let i = 0; i < gameList.length; i++) {
    const cart = gameList[i];
    const dom = renderCarts(cart);
    list.appendChild(dom);
}