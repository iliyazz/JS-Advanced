const { assert } = require('chai');
let chooseYourCar = require('../chooseYourCar');















describe("Tests chooseYourCar", function () {
    describe("Test  function", function () {
        it("Test choosingType(type, color, year) If the year is less than 1900 and the year is more than 2022, throw an error", function () {
            assert.throw(() => chooseYourCar.choosingType('Sedan', 'color', 1899), "Invalid Year!");
            assert.throw(() => chooseYourCar.choosingType('Sedan', 'color', 2023), "Invalid Year!");
        });
        it("Test choosingType(type, color, year) If the value of the string type is different from 'Sedan', throw an error", function () {
            assert.throw(() => chooseYourCar.choosingType('type', 'color', 2000), "This type of car is not what you are looking for.");
        });

        it("Test choosingType(type, color, year) If the year of the car is greater or equal to 2010", function () {
            assert.equal(chooseYourCar.choosingType('Sedan', 'color', 2010), 'This color Sedan meets the requirements, that you have.');
            assert.equal(chooseYourCar.choosingType('Sedan', 'color', 2020), 'This color Sedan meets the requirements, that you have.');
        });
        it("Test choosingType(type, color, year) If the year of the car is less than 2010", function () {
            assert.equal(chooseYourCar.choosingType('Sedan', 'color', 2009), 'This Sedan is too old for you, especially with that color color.');
            assert.equal(chooseYourCar.choosingType('Sedan', 'color', 2000), 'This Sedan is too old for you, especially with that color color.');
        });
    });


    describe("Test brandName (brands, brandIndex) function", function () {
        it("Test invalid input", function () {
            assert.throw(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '3'), "Invalid Information!");
            assert.throw(() => chooseYourCar.brandName('["BMW", "Toyota", "Peugeot"]', 1), "Invalid Information!");
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1), "BMW, Peugeot");
        });
    });

    describe("Test CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres) function", function () {
        it("Test if the distanceInKilometers   and consumptedFuelInLitres are not a numbers, or are a negative numbers, throw an error", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(20, 0), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption(0, 20), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption(20, -5), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption(-5, 20), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption(20, '10'), "Invalid Information!");
            assert.throw(() => chooseYourCar.carFuelConsumption('10', 20), "Invalid Information!");
        });
        it("Test with valid parameters", function () {
            assert.equal(chooseYourCar.carFuelConsumption(100, 7.00), `The car is efficient enough, it burns 7.00 liters/100 km.`);
        });
        it("Test with valid parameters", function () {
            assert.equal(chooseYourCar.carFuelConsumption(125, 5.27), `The car is efficient enough, it burns ${(100 * 5.27 / 125).toFixed(2)} liters/100 km.`);
        });
        it("Test with valid parameters", function () {
            assert.equal(chooseYourCar.carFuelConsumption(100, 7.01), "The car burns too much fuel - 7.01 liters!");
        });
        it("Test with valid parameters", function () {
            assert.equal(chooseYourCar.carFuelConsumption(125, 18.37), `The car burns too much fuel - ${(100 * 18.37 / 125).toFixed(2)} liters!`);
        });

        /*
        carFuelConsumption(distanceInKilometers, consumptedFuelInLiters) {

        let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);

        if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
            typeof consumptedFuelInLiters !== "number" || consumptedFuelInLiters <= 0) {
            throw new Error("Invalid Information!");
        } else if (litersPerHundredKm <= 7) {
            return `The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`;
        } else {
            return `The car burns too much fuel - ${litersPerHundredKm} liters!`;
        }
    }*/




    });
});

