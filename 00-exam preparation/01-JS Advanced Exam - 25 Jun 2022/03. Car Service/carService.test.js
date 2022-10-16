const { assert } = require('chai');
let carService = require('../carService');

describe("Tests carService", function () {
    describe("Tests isItExpensive function", function () {
        let expected1 = `The issue with the car is more severe and it will cost more money`;
        it("isItExpensive should return correct value with parameter 'Engine'", function () {
            assert.equal(carService.isItExpensive('Engine'), expected1);
        });
        it("isItExpensive should return correct value with parameter 'Transmission'", function () {
            assert.equal(carService.isItExpensive('Transmission'), expected1);
        });

        expected2 = `The overall price will be a bit cheaper`;
        it("isItExpensive should return correct value with any other parameter", function () {
            assert.equal(carService.isItExpensive('otherParameter'), expected2);
        });
    });
    describe("Tests discount function", function () {
        let expected1 = `Invalid input`;
        it("Test incorrect input data for part numbers", function () {
            assert.throw(() => carService.discount('test', 5), expected1);
        });
        it("Test incorrect input data for part numbers", function () {
            assert.throw(() => carService.discount(['test'], 5), expected1);
        });
        it("Test incorrect input data for part numbers", function () {
            assert.throw(() => carService.discount({}, 5), expected1);
        });

        it("Test incorrect input data for totalPrice", function () {
            assert.throw(() => carService.discount(5, 'test'), expected1);
        });
        it("Test incorrect input data for totalPrice", function () {
            assert.throw(() => carService.discount(5, ['test']), expected1);
        });
        it("Test incorrect input data for totalPrice", function () {
            assert.throw(() => carService.discount(5, {}), expected1);
        });

        it("Test incorrect input data for part numbers and totalPrice", function () {
            assert.throw(() => carService.discount('test', {}), expected1);
        });

        expected3 = `You cannot apply a discount`;
        it("Test discount function with number of parts smaller or equal to 2", function () {
            assert.equal(carService.discount(2, 10), expected3);
        });
        it("Test discount function with number of parts smaller or equal to 2", function () {
            assert.equal(carService.discount(1, 10), expected3);
        });

        expected4 = `Discount applied! You saved 15$`;
        it("Test discount percentage when numberOfParts is higher than 2 and smaller or equal to 7", function () {
            assert.equal(carService.discount(3, 100), expected4);
        });
        expected4 = `Discount applied! You saved 15$`;
        it("Test discount percentage when numberOfParts is higher than 2 and smaller or equal to 7", function () {
            assert.equal(carService.discount(7, 100), expected4);
        });

        expected5 = `Discount applied! You saved 30$`;
        it("Test discount percentage when numberOfParts is higher than 7", function () {
            assert.equal(carService.discount(8, 100), expected5);
        });
        it("Test discount percentage when numberOfParts is higher than 7", function () {
            assert.equal(carService.discount(18, 100), expected5);
        });
    });

    describe("Tests partsToBuy function", function () {
        it("Test input data with empty partsCatalog", function () {
            assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), 0);
        });
        it("Test incorrect input data for partsCatalog", function () {
            assert.throw(() => carService.partsToBuy('text', ["blowoff valve", "injectors"], 'Invalid input'));
        });
        it("Test incorrect input data for partsCatalog", function () {
            assert.throw(() => carService.partsToBuy({ text }, ["blowoff valve", "injectors"], 'Invalid input'));
        });
        it("Test incorrect input data for partsCatalog", function () {
            assert.throw(() => carService.partsToBuy(20, ["blowoff valve", "injectors"], 'Invalid input'));
        });

        it("Test incorrect input data for neededParts", function () {
            assert.throw(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 'text', 'Invalid input'));
        });
        it("Test incorrect input data for neededParts", function () {
            assert.throw(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], { text }, 'Invalid input'));
        });
        it("Test incorrect input data for neededParts", function () {
            assert.throw(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 20, 'Invalid input'));
        });

        it("Test incorrect input data for partsCatalog and neededParts", function () {
            assert.throw(() => carService.partsToBuy('text1', 20, 'Invalid input'));
        });

        it("Test with correct input data should return correct value", function () {
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]), 145);
        });
        it("Test with correct input data should return correct value", function () {
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, { part: "tyre", price: 100 }], ["blowoff valve", "injectors", "tyre"]), 245);
        });
    });
});




