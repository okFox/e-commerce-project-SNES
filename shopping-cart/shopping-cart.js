
import renderShoppingCart from './render-shopping-cart.js';
import gameList from '../data/games.js';
import { toUSD, findById, calcOrderTotal } from '../common/utils.js';

let checkoutbasket = localStorage.getItem('working-basket');
let serializedCheckoutBasket = JSON.parse(checkoutbasket);
const placeOrderButton = document.getElementById('place-order-button');




//iterates over serializedCheckoutBasket and generates line items using rendershoppingcart function

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < serializedCheckoutBasket.length; i++) {

    const lineItem = serializedCheckoutBasket[i];
    const game = findById(gameList, lineItem.id);

    const dom = renderShoppingCart(game, lineItem);
    
    tbody.appendChild(dom);

}


placeOrderButton.addEventListener('click', () => {
    localStorage.removeItem('working-basket');
    let serializedCheckoutBasket = JSON.parse(checkoutbasket);
    alert('Ready to Checkout?\n' + JSON.stringify(serializedCheckoutBasket, true, 2));
    window.location = '../';
});


document.getElementById('place-order-button').removeAttribute('disabled');
const orderTotal = calcOrderTotal(serializedCheckoutBasket, gameList);
orderTotalCell.textContent = toUSD(orderTotal);
