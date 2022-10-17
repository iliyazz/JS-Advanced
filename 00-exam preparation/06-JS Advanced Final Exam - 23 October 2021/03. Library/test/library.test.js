const { assert } = require('chai');
library = require('../library');

describe("Tests library", function () {
    describe("Test calcPriceOfBook function", function () {

        it("Test incorrect input data for nameOfBook", function () {
            assert.throw(() => library.calcPriceOfBook(150, 2020), 'Invalid input');
        });
        it("Test incorrect input data for year", function () {
            assert.throw(() => library.calcPriceOfBook('150', '2020'), 'Invalid input');
        });
        it("Test when the year of publication is less than or equal to 1980, there is a 50% percent discount from the standard price", function () {
            assert.equal(library.calcPriceOfBook('Testname', 1980), `Price of Testname is 10.00`);
        });
        it("Test when the year of publication is greater than 1980, there is a no discount from the standard price", function () {
            assert.equal(library.calcPriceOfBook('Testname', 1981), `Price of Testname is 20.00`);
        });
    });

    describe("Test findBook function", function () {
        it("Test If the length of the booksArr array is zero should throw an error", function () {
            assert.throw(() => library.findBook([], 2020), 'No books currently available');
        });
        it("Test if submitted string desiredBook is present in the array booksArr.", function () {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Testname'), `The book you are looking for is not here!`);
        });
        it("Test if submitted string desiredBook is present in the array booksArr.", function () {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Life Style'), `We found the book you want.`);
        });
    });

    describe("Test arrangeTheBooks function", function () {
        it("Test incorrect input data for countBooks.If countBooks is not integer should throw error", function () {
            assert.throw(() => library.arrangeTheBooks('150'), 'Invalid input');
        });
        it("Test incorrect input data for countBooks.If countBooks is negative number should throw error", function () {
            assert.throw(() => library.arrangeTheBooks(-1), 'Invalid input');
        });
        it("Test if shelves are enough for books. Shelves should be enough", function () {
            assert.equal(library.arrangeTheBooks(40), `Great job, the books are arranged.`);
        });
        it("Test if shelves are enough for books. Shelves should not be enough", function () {
            assert.equal(library.arrangeTheBooks(41), `Insufficient space, more shelves need to be purchased.`);
        });
    });
});


