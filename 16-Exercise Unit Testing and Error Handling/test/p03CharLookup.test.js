const { assert } = require('chai')
let lookupChar = require('../p03CharLookup')

describe("Test lookupChar function", () => {
    it("Should return undefined if first parameter is not string", ()=>{
        assert.equal(lookupChar(true, 2), undefined)
    })
    it("Should return undefined if second parameter is not integer", ()=>{
        assert.equal(lookupChar("abcdefghi", "5"), undefined)
    })
    it("Should return undefined if second parameter is not number", ()=>{
        assert.equal(lookupChar("abcdefghi", 5.5), undefined)
    })
    it('Should return "Incorrect index" if index is out of range', ()=>{
        assert.equal(lookupChar("abcdefghi", -1), "Incorrect index")
    })
    it('Should return "Incorrect index" if index is out of range', ()=>{
        assert.equal(lookupChar("abcdefghi", 9), "Incorrect index")
    })
    it('Should return correct result', ()=>{
        assert.equal(lookupChar("abcdefghi", 4), "e")
    })
    it('Should return correct result', ()=>{
        assert.equal(lookupChar("abcdefghi", 0), "a")
    })
    it('Should return correct result', ()=>{
        assert.equal(lookupChar("abcdefghi", 8), "i")
    })
})