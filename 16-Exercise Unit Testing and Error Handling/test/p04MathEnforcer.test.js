const { assert, expect } = require('chai');
let mathEnforcer = require('../p04MathEnforcer');

describe("Testing mathEnforcer", () => {
    describe("Testing addFive", () => {
        it("Should return undefined if parameter is not number", () => {
            assert.equal(mathEnforcer.addFive("25"), undefined);
            assert.equal(mathEnforcer.addFive({ age: 25 }), undefined);
            assert.equal(mathEnforcer.addFive([25]), undefined);
        })
        it("Should return correct value", () => {
            assert.equal(mathEnforcer.addFive(25), 30);
        })
        it("Should return correct value", () => {
            assert.equal(mathEnforcer.addFive(-25), -20);
        })
        it("Should return correct value with numbers", () => {
            expect(mathEnforcer.addFive(25.32)).to.be.closeTo(30.32, 0.01)
        })
    })
    describe("Testing subtractTen", () => {
        it("Should return undefined if parameter is not number", () => {
            assert.equal(mathEnforcer.subtractTen("25"), undefined);
            assert.equal(mathEnforcer.subtractTen({ age: 25 }), undefined);
            assert.equal(mathEnforcer.subtractTen([25]), undefined);
        })
        it("Should return correct value", () => {
            assert.equal(mathEnforcer.subtractTen(25), 15);
        })
        it("Should return correct value", () => {
            assert.equal(mathEnforcer.subtractTen(-25), -35);
        })
        it("Should return correct value with numbers", () => {
            expect(mathEnforcer.subtractTen(25.32)).to.be.closeTo(15.32, 0.01)
        })
    })
    describe("Testing sum", () => {
        it("Should return undefined if at least one of parameters is not number", () => {
            assert.equal(mathEnforcer.sum("25", 15), undefined);
            assert.equal(mathEnforcer.sum(25, "15"), undefined);
            assert.equal(mathEnforcer.sum([25], 15), undefined);
            assert.equal(mathEnforcer.sum(25, [15]), undefined);
            assert.equal(mathEnforcer.sum({age: 25}, 15), undefined);
            assert.equal(mathEnforcer.sum(25, {age: 25}), undefined);
        })
        it("Should return correct value with integers", () => {
            assert.equal(mathEnforcer.sum(25, 15), 40);
        })
        it("Should return correct value with numbers", () => {
            assert.equal(mathEnforcer.sum(-25, -15), -40);
        })
        it("Should return correct value with numbers", () => {
            assert.equal(mathEnforcer.sum(-25, 15), -10);
        })
        it("Should return correct value with numbers", () => {
            expect(mathEnforcer.sum(25.32, 15.26)).to.be.closeTo(40.58, 0.01)
        })
    })
})