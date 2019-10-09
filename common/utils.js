//this function eats  data from two arrays.   it compares the id from the customer's //order to the id's in the main data set and outputs when it finds a match

export function findById(items, id) {
    // gets number of items in array. loops through each
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

    //compares
        if (item.id === id) {
            return item;
        }
    }

    // if it does not find a match
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}

// but whyyyyyyyy?
function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}


export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}