import renderCarts from '../src/render-carts.js';

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('compare html to rendered', function(assert) {
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
    const expected = '<li class="adventure" title="The greatest SNES game of all time."><h3>Shadowrun SNES</h3><img src="../assets/shadowrun.jpg" alt="Shadowrun SNES image"><p class="price">$100.00<button value="undefined">Add</button></p></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderCarts(shadowrun);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
