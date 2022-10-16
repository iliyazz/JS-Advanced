const { assert } = require('chai');
flowerShop = require('../flowerShop');
describe("Tests flowerShop", function () {
    describe("Test calcPriceOfFlowers function", function () {
        it("Test with incorrect input data for 'flower' should throw Error", function () {
            assert.throw(() => flowerShop.calcPriceOfFlowers(5, 5, 5), 'Invalid input!');
        });
        it("Test with incorrect input data for 'price' should throw Error", function () {
            assert.throw(() => flowerShop.calcPriceOfFlowers('5', '5', 5), 'Invalid input!');
        });
        it("Test with incorrect input data for 'price' should throw Error", function () {
            assert.throw(() => flowerShop.calcPriceOfFlowers('5', 5, '5'), 'Invalid input!');
        });
        it("Test with valid input data for should return correct result", function () {
            assert.equal(flowerShop.calcPriceOfFlowers('TestFlower', 5, 10), `You need $50.00 to buy TestFlower!`);
        });
    });
    describe("Test checkFlowersAvailable function", function () {
        it("Test when flower is present in the array gardenArr", function () {
            assert.equal(flowerShop.checkFlowersAvailable("Lily", ["Rose", "Lily", "Orchid"]), `The Lily are available!`);
        });
        it("Test when flower does not present in the array gardenArr", function () {
            assert.equal(flowerShop.checkFlowersAvailable("test", ["Rose", "Lily", "Orchid"]), `The test are sold! You need to purchase more!`);
        });
    });
    describe("Test sellFlowers function", function () {
        it("Test with incorrect input data for 'gardenArr' should throw Error", function () {
            assert.throw(() => flowerShop.sellFlowers(7, 5), 'Invalid input!');
        });
        it("Test with incorrect input data for 'space' should throw Error", function () {
            assert.throw(() => flowerShop.sellFlowers(['7'], '5'), 'Invalid input!');
        });
        it("Test with incorrect input data for 'space' should throw Error", function () {
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3), 'Invalid input!');
        });
        it("Test with incorrect input data for 'space' should throw Error", function () {
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1), 'Invalid input!');
        });
        it("Test remove an element from array", function () {
            assert.deepEqual(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1), "Rose / Orchid");
        });
    });
});



