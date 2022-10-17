const { assert } = require('chai');
companyAdministration = require('../companyAdministration');

describe("Tests companyAdministration", function () {
    describe("Test hiringEmployee fuction", function () {
        it("Test If the value of the string position is different from 'Programmer'", function () {
            assert.throw(() => companyAdministration.hiringEmployee('test', 'otherPosition', 15), `We are not looking for workers for this position.`);
        });
        it("Test If the yearsЕxperience are less than 3", function () {
            assert.equal(companyAdministration.hiringEmployee('testName', 'Programmer', 2), `testName is not approved for this position.`);
        });
        it("Test If the yearsЕxperience are greater than or equal to 3", function () {
            assert.equal(companyAdministration.hiringEmployee('testName', 'Programmer', 3), `testName was successfully hired for the position Programmer.`);
        });
    });
    describe("Test calculateSalary fuction", function () {
        it("Test to validate the input data", function () {
            assert.throw(() => companyAdministration.calculateSalary('15'), `Invalid hours`);
        });
        it("Test to validate the input data", function () {
            assert.throw(() => companyAdministration.calculateSalary(-1), `Invalid hours`);
        });
        it("Valid input data when working hours are less or equal 160 should return correct value", function () {
            assert.equal(companyAdministration.calculateSalary(10), 150);
        });
        it("Valid input data when working hours are less or equal 160 should return correct value", function () {
            assert.equal(companyAdministration.calculateSalary(160), 2400);
        });
        it("Valid input data when working hours are more than 160 should return correct value", function () {
            assert.equal(companyAdministration.calculateSalary(161), 3415);
        });
    });
    describe("Test firedEmployee fuction", function () {
        it("Test to validate the input data", function () {
            assert.throw(() => companyAdministration.firedEmployee("['Name1', 'Name2', 'Name3']", 2), `Invalid input`);
        });
        it("Test to validate the input data", function () {
            assert.throw(() => companyAdministration.firedEmployee(['Name1', 'Name2', 'Name3'], '2'), `Invalid input`);
        });
        it("Test to validate the input data", function () {
            assert.throw(() => companyAdministration.firedEmployee(['Name1', 'Name2', 'Name3'], -1), `Invalid input`);
        });
        it("Test to validate the input data", function () {
            assert.throw(() => companyAdministration.firedEmployee(['Name1', 'Name2', 'Name3'], 3), `Invalid input`);
        });
        it("Valid input data when working hours are more than 160 should return correct value", function () {
            assert.deepEqual(companyAdministration.firedEmployee(['Name1', 'Name2', 'Name3'], 1), 'Name1, Name3');
        });
    });
});




