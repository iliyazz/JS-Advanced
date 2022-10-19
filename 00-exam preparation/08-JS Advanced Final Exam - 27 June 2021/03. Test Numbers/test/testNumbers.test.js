const { assert } = require('chai')
let testNumbers = require('../testNumbers')


describe("Tests testNumbers", function () {
    describe("Test sumNumbers function", function () {
        it("Test: invalid input should return undefined", function () {
            assert.equal(testNumbers.sumNumbers('num1', 5), undefined);
            assert.equal(testNumbers.sumNumbers(5, 'num1'), undefined);
            assert.equal(testNumbers.sumNumbers('num1', -5), undefined);
            assert.equal(testNumbers.sumNumbers(-5, 'num1'), undefined);
        });
        it("Test: ivalid input should return sum of numbers", function () {

            let expected1 = 15.1;
            let expected2 = -5.1;
            let expected3 = 5.2;
            let expected4 = -15.1;
            assert.equal(testNumbers.sumNumbers(10.1, 5), expected1.toFixed(2));
            assert.equal(testNumbers.sumNumbers(-10.1, 5), expected2.toFixed(2));
            assert.equal(testNumbers.sumNumbers(10.2, -5), expected3.toFixed(2));
            assert.equal(testNumbers.sumNumbers(-10, -5.1), expected4.toFixed(2));
        });
    });
    describe("Test numberChecker function", function () {
        it("Test: invalid input should return error", function () {
            assert.throw(() => testNumbers.numberChecker(['test']), 'The input is not a number!');
        });
        it("Test: valid input should return even or odd", function () {
            assert.equal(testNumbers.numberChecker(5), 'The number is odd!');
        });
        it("Test: valid input should return even or odd", function () {
            assert.equal(testNumbers.numberChecker(6), 'The number is even!');
        });
        it("Test: valid input should return even or odd", function () {
            assert.equal(testNumbers.numberChecker(-5), 'The number is odd!');
        });
        it("Test: valid input should return even or odd", function () {
            assert.equal(testNumbers.numberChecker(-6), 'The number is even!');
        });
    });
    describe("Test averageSumArray function", function () {
        it("Test: valid input should return correct average value", function () {
            assert.equal(testNumbers.averageSumArray([4, 3, 2, 1, 0, -1, -2,]), 1);
        });
        it("Test: valid input should return correct average value", function () {
            assert.equal(testNumbers.averageSumArray([50, 3, 2, 1, 0, -1, -2,]), 53 / 7);
        });
    });
});