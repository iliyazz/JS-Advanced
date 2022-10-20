const { assert } = require('chai');
dealership = require('../p03Dealership');

describe("Tests dealership", function () {
    describe("Test newCarCost(oldCarModel, newCarPrice) function", function () {
        it("Test when return old car from list with cars", function () {
            assert.equal(dealership.newCarCost('Audi A4 B8', 60000), 45000);
        });
        it("Test when return old car not included in list", function () {
            assert.equal(dealership.newCarCost('Opel Vectra C', 60000), 60000);
        });
    });
    describe("Test carEquipment(extrasArr, indexArr) function", function () {
        it("Test valid data should return correct result", function () {
            assert.deepEqual(dealership.carEquipment(
                ['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2, 3]), ['heated seats', 'sport rims', 'navigation']);
        });
    });
    describe("Test euroCategory(category)", function () {
        it("Test when category >= 4", function () {
            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: ${(30000 - 15000) * 0.95}.`);
        });
        it("Test when category < 4", function () {
            assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!');
        });
    });
});