//import serializedCheckoutBasket from '../data/serializedCheckoutBasket.js';
import renderShoppingCart from './render-shopping-cart.js';
import gameList from '../data/games.js';
import { toUSD, findById, calcOrderTotal } from '../common/utils.js';


//let cartCount = document.getElementById('items-in-cart');
//const placeOrderButton = document.getElementById('place-order-button');
let checkoutbasket = localStorage.getItem('working-basket');
let serializedCheckoutBasket = JSON.parse(checkoutbasket);
//let numItemsInCart = 0;



//iterates over serializedCheckoutBasket and generates line items using rendershoppingcart function

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < serializedCheckoutBasket.length; i++) {

    const lineItem = serializedCheckoutBasket[i];
    const game = findById(gameList, lineItem.id);

    const dom = renderShoppingCart(game, lineItem);
    
    //numItemsInCart++;

    tbody.appendChild(dom);
    //cartCount.textContent = numItemsInCart;
}








const orderTotal = calcOrderTotal(serializedCheckoutBasket, gameList);
orderTotalCell.textContent = toUSD(orderTotal);


/*
const verbInput = document.getElementById('verb-input');
const verb = verbInput.value;

const verbspan = document.getElementById('verb');
verbspan.textContent = verb; */