import { findById, calcLineTotal, toUSD } from '../common/utils.js';
import fullCartData from '../data/fullCartData.js';
import gameList from '../data/games.js';

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('find by id in array', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'shadowrun';
    const expected = 'shadowrun';

    //Act 
    // Call the function you're testing and set the result to a const
    const foundGame = findById(gameList, id);
  
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(foundGame.id, expected);
});

test('find product by id returns null if not found', assert => {
    // arrange
    const id = 'not found';
    const expected = null;

    // act
    const foundGame = findById(gameList, id);

    // assert
    assert.equal(foundGame, expected);
});

test('calculating line item total', assert => {
    // arrange
    const qty = 5;
    const price = 10;
    const expected = 50;

    // act
    const orderTotal = calcLineTotal(qty, price);

    // assert
    assert.equal(orderTotal, expected);
});