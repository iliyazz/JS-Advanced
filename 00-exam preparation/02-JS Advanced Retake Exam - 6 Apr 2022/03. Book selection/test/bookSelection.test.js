const { assert } = require('chai');
const bookSelection = require('../bookSelection');
describe("Tests bookSelection", function () {
    describe("Test isGenreSuitable function", function () {

        it("Test genre Thriller and less or equal to 12", function () {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), `Books with Thriller genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 5), `Books with Thriller genre are not suitable for kids at 5 age`);
        });

        it("Test genre Horror and less or equal to 12", function () {
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), `Books with Horror genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 5), `Books with Horror genre are not suitable for kids at 5 age`);
        });

        it("Test with valid data", function () {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 13), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 13), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 25), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 25), `Those books are suitable`);
        });
    });

    describe("Test isItAffordable function", function () {

        it("Test with invalid data should throw Error", function () {
            assert.throw(() => bookSelection.isItAffordable('Thriller', 25), `Invalid input`);
            assert.throw(() => bookSelection.isItAffordable(25, {}), `Invalid input`);
        });

        it("Test isItAffordable with correct data should return correct result", function () {
            assert.equal(bookSelection.isItAffordable(51, 50), `You don't have enough money`);
            assert.equal(bookSelection.isItAffordable(50, 50), `Book bought. You have 0$ left`);
        });
    });
    describe("Test suitableTitles function", function () {

        it("Test with invalid data should throw Error", function () {
            assert.throw(() => bookSelection.suitableTitles('Thriller', '25'), `Invalid input`);
            assert.throw(() => bookSelection.suitableTitles([25], {}), `Invalid input`);
        });

        it("Test suitableTitles with correct data should return correct result", function () {
            assert.deepEqual(bookSelection.suitableTitles(
                [
                    { title: "The Da Vinci Code", genre: "Thriller" },
                    { title: "Title test 2", genre: "Genre test 2" }
                ], "Thriller"), ["The Da Vinci Code"]);
        });
    });
});

