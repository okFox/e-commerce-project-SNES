import cartList from './data/carts.js';
import renderCarts from './render-carts.js';



const list = document.getElementById('carts');

for (let i = 0; i < cartList.length; i++) {
    const cart = cartList[i];
    const dom = renderCarts(cart);
    list.appendChild(dom);
}