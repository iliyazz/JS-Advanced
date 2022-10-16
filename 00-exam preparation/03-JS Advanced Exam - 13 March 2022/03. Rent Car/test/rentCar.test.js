const { assert } = require('chai');
rentCar = require('../rentCar');

describe("Tests rentCar", function () {
    describe("Test searchCar function", function () {
        it("Test incorrect input data for shop", function () {
            assert.throw(() => rentCar.searchCar('test1', '5'), 'Invalid input!');
        });
        it("Test incorrect input data for model", function () {
            assert.throw(() => rentCar.searchCar(['test1'], 5), 'Invalid input!');
        });
        it("Test when there are no matching elements", function () {
            assert.throw(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'noMatchData'), 'There are no such models in the catalog!');
        });
        it("Test when there are matching elements", function () {
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], "BMW"), `There is 2 car of model BMW in the catalog!`);
        });
    });

    describe("Test calculatePriceOfCar function", function () {
        it("Test incorrect input data for model", function () {
            assert.throw(() => rentCar.calculatePriceOfCar(5, '5'), 'Invalid input!');
        });
        it("Test incorrect input data for days", function () {
            assert.throw(() => rentCar.calculatePriceOfCar(5, 5), 'Invalid input!');
        });
        it("Test when  there is no such model", function () {
            assert.throw(() => rentCar.calculatePriceOfCar('TestModel', 5), 'No such model in the catalog!');
        });
        it("Test valid data should return correct result", function () {
            assert.equal(rentCar.calculatePriceOfCar('BMW', 10), `You choose BMW and it will cost $450!`);
        });

        describe("Test checkBudget function", function () {
            it("Test incorrect input data for costPerDay", function () {
                assert.throw(() => rentCar.checkBudget('5', 6, 7), 'Invalid input!');
            });
            it("Test incorrect input data for costPerDay", function () {
                assert.throw(() => rentCar.checkBudget(5, '6', 7), 'Invalid input!');
            });
            it("Test incorrect input data for costPerDay", function () {
                assert.throw(() => rentCar.checkBudget(5, 6, '7'), 'Invalid input!');
            });
            it("Test when budget is not enough", function () {
                assert.equal(rentCar.checkBudget(100, 6, 599), 'You need a bigger budget!');
            });
            it("Test when budget is enough", function () {
                assert.equal(rentCar.checkBudget(100, 6, 600), 'You rent a car!');
            });
        });
    });
});


