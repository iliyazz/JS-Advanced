const { expect } = require("chai");
const {sum} = require("./p04SumOfNumbers");

describe("sum function validation", () =>{
    it("Should return correct result with array of numbers", () =>{
        //Arrange
        let arr = [1, 2, 3, 4];
        //Act
        let result = sum(arr);
        //Assert
        expect(result).to.be.equal(10);
    })
    it("Should work with empty array", () =>{
        //Arrange
        let arr = [];
        //Act
        let result = sum(arr);
        //Assert
        expect(result).to.be.equal(0);
    })
    it("Should work with array with length 0", () =>{
        //Arrange
        let arr = [-2.5];
        //Act
        let result = sum(arr);
        //Assert
        expect(result).to.be.equal(-2.5);
    })
})
