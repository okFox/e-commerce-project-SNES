

import renderShoppingCart from '../shopping-cart/render-shopping-cart.js';

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('render one line item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const shadowrun = {
        id: 'shadowrun',
        name: 'Shadowrun SNES',
        image: 'shadowrun.jpg',
        description: 'The greatest SNES game of all time.',
        category: 'adventure',
        price: 100.00,
        cost: 75.00
    };

    const fullCartData = {
        id: 'shadowrun',
        quantity: 2
    };



    const expected = '<tr><td class="item-side">shadowrun</td><td>$100.00</td><td>2</td><td class="line-total">$200.00</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderShoppingCart(shadowrun, fullCartData);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, html);
});

