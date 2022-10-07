const { expect, assert } = require('chai');
const {createCalculator} = require('./p07AddSubtract');

describe("createCalculator function validation", () => {
    it("Should be object", () => {
        //Arrange, act, Assert
        assert.isObject(createCalculator())
    })
    it("Should contain add(), subtract() and get() as properties", () => {
        //Arrange, act, Assert
        let obj1 = createCalculator().hasOwnProperty('add');
        let obj2 = createCalculator().hasOwnProperty('subtract');
        let obj3 = createCalculator().hasOwnProperty('get');
        //Assert
        expect(obj1).to.be.true;
        expect(obj2).to.be.true;
        expect(obj3).to.be.true;
    })
    it("Add should return correct result", () => {
        //Arrange
        let calc = createCalculator();
        //Act
        calc.add('10');
        calc.add(30);
        //Assert
        expect(calc.get()).to.be.equal(40);
    })
    it("Subtract should return correct result", () => {
        //Arrange
        let calc = createCalculator();
        //Act
        calc.add('10');
        calc.add(30);
        calc.subtract(8);
        calc.subtract('3')
        //Assert
        expect(calc.get()).to.be.equal(29);
    })
})