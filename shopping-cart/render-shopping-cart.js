
import { toUSD, calcLineTotal } from '../common/utils.js';


function renderShoppingCart(gameId, cartLineItem) {

   
    const tr = document.createElement('tr');

//gets id of game ordered, outputs to DOM
    const idCell = document.createElement('td');
    idCell.className = 'item-side';
    idCell.textContent = gameId.id;
    tr.appendChild (idCell);

    //gets price of game, converts to USD, outputs to DOM
    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(gameId.price);

    
    tr.appendChild(priceCell);

//gets quantity of game ordered, outputs to DOM
    const quantityCell = document.createElement ('td');
    quantityCell.textContent = cartLineItem.quantity;
    tr.appendChild(quantityCell);



//calculates line total, converts to USD, outputs to DOM
    const totalCell = document.createElement('td');
    totalCell.className = 'line-total';
    const thisLineTotal = calcLineTotal(gameId.price, cartLineItem.quantity);
    
    




    totalCell.textContent = toUSD(thisLineTotal);

   
    tr.appendChild(totalCell);

    return tr;
}

export default renderShoppingCart;