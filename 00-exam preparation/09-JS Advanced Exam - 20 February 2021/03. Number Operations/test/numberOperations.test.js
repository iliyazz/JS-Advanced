const { assert } = require('chai');
let numberOperations = require('../NumberOperationsResources');

describe("Tests numberOperations", function () {
    describe("Test powNumber(num) function", function () {
        it("Test the function returns the power of the given number", function () {
            assert.equal(numberOperations.powNumber(5), 25);
        });
        it("Test the function returns the power of the given number", function () {
            assert.equal(numberOperations.powNumber(-5), 25);
        });
    });
    describe("Test numberChecker(input) function", function () {
        it("If the input is not a number the function throws an error", function () {
            assert.throw(() => numberOperations.numberChecker(['test']), 'The input is not a number!');
        });
        it("Test the function function checks if it is lower than 100", function () {
            assert.equal(numberOperations.numberChecker(-5), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!');
        });
        it("Test the function function checks if it is greater or equal than 100", function () {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(150), 'The number is greater or equal to 100!');
        });
    });
    describe("Test sumArrays(array1, array2) function", function () {
        it("Test valid data should return correct result", function () {
            assert.deepEqual(numberOperations.sumArrays(
                [], []), []);
        });
        it("Test valid data should return correct result", function () {
            assert.deepEqual(numberOperations.sumArrays(
                [1], [2]), [3]);
        });
        it("Test valid data should return correct result", function () {
            assert.deepEqual(numberOperations.sumArrays(
                [1, 2, 3, 4], [10, 9, 8]), [11, 11, 11, 4]);
        });
        it("Test valid data should return correct result", function () {
            assert.deepEqual(numberOperations.sumArrays([-1, -2, -3], []), [-1, -2, -3]);
        });
        it("Test valid data should return correct result", function () {
            assert.deepEqual(numberOperations.sumArrays([],[-1, -2, -3]), [-1, -2, -3]);
        });
    });
});
















