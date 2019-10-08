
function renderCarts(cartList) {
    const li = document.createElement('li');
    li.className = cartList.category;
    li.title = cartList.description;

    const h3 = document.createElement('h3');
    h3.textContent = cartList.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + cartList.image;
    img.alt = cartList.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + cartList.price.toFixed(2);
    // const usd = fruit.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = cartList.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderCarts; 