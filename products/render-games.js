import { findById } from '../common/utils.js';

let cartCount = document.getElementById('items-in-cart');
let numItemsInCart = 0;


//makes list of games, add buttons,  and generates product.html page
function renderGames(gameList) {
    const li = document.createElement('li');
    li.className = gameList.category;
    li.title = gameList.description;

    const h3 = document.createElement('h3');
    h3.textContent = gameList.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + gameList.image;
    img.alt = gameList.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + gameList.price.toFixed(2);
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = gameList.id;


    button.addEventListener('click', () => {
//checks local storage to see if a basket-in-use already exists
        let json = localStorage.getItem('working-basket');
        let basket;
        numItemsInCart++;

        
//if a basket is in storage, parse it back to an array
        if (json) {
            basket = JSON.parse(json);
        }
        else {
            basket = [];

        }

//make an array with gameid and qty of 1 using findById to match against gamesList data
        let gameInBasket = findById(basket, gameList.id);
//if this game is not in the basket add it with a qty of 1
        if (!gameInBasket) {
            gameInBasket = {
                id: gameList.id,
                quantity: 1

            };

// .push adds this game/qty pair to array basket
            basket.push(gameInBasket);

        } else {
        
//if it is already there, increment qty by 1
            gameInBasket.quantity++;
  
        }

//stringify basket and save to local storage

        json = JSON.stringify(basket);
        localStorage.setItem('working-basket', json);

//check to see if this works properly

        cartCount.textContent = numItemsInCart;
    });
   
    p.appendChild(button);
    li.appendChild(p);

    return li;
}

export default renderGames; 