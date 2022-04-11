const assert = require('chai').assert;
const main = require('../main');

// Results
const helloWord = main.helloWord();
const subtractionResult = main.subtraction(14,5);
const arrayofnumbers = main.arrayofnumbers();

describe('Main Suite', function() {
    describe('Hello world + Test Cases', function() {
        it('Hello world test is as expected', function() {
            assert.equal( helloWord, 'hello worls');
        });
        it('Validate data type', function() {
            assert.typeOf(helloWord, 'string', 'The Expected data type is a string');
        });
    });

    describe('Subtraction Method - Test Cases', function() {
        it('Less than 10', function() {
            assert.isBelow(subtractionResult, 10);
        });
    });

    describe('Array Method - Test Cases', function() {
        it('Array includes the number 5', function() {
            assert.include(arrayofnumbers, 5)
        });
        it('Validate array length', function() {
            assert.lengthOf(arrayofnumbers, 6)
        })
    });
});