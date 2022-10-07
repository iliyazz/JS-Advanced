const { assert } = require('chai');
let isOddOrEven = require('../p02EvenOrOdd');

describe("Test isOddOrEven", () => {
    it("Should return undefined if passed parameter is not string", () =>{
        assert.equal(isOddOrEven(25), undefined);
    })
    it("Should return undefined if passed parameter is not string", () =>{
        assert.equal(isOddOrEven({name: "Gosho", age: 25}), undefined);
    })
    it("Should return even", () =>{
        assert.equal(isOddOrEven("25"), "even");
    })
    
    it("Should return odd", () =>{
        assert.equal(isOddOrEven("true5"), "odd");
    })
    it("Should return odd", () =>{
        assert.equal(isOddOrEven("Pesho i Gosho"), "odd");
    })
}) 