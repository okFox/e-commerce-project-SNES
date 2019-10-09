import { findById } from '../common/utils.js';
import fullCartData from '../data/fullCartData.js';
import gameList from '../data/games.js';

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('ID of data array matches customer purchase array', function(assert) {
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
