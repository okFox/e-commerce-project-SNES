
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
    // const usd = fruit.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = gameList.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderGames; 