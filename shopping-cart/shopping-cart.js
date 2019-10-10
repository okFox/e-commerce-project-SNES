import fullCartData from '../data/fullCartData.js';
import renderShoppingCart from './render-shopping-cart.js';
import gameList from '../data/games.js';
import { toUSD, findById, calcOrderTotal } from '../common/utils.js';


//iterates over fullcartdata and generates line items using rendershoppingcart function

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < fullCartData.length; i++) {

    const lineItem = fullCartData[i];
    const game = findById(gameList, lineItem.id);

    const dom = renderShoppingCart(game, lineItem);
    console.log('hi', lineItem);
    

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(fullCartData, gameList);
orderTotalCell.textContent = toUSD(orderTotal);