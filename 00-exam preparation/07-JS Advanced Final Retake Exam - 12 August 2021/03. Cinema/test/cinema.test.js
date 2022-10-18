const { assert, expect } = require('chai');
let cinema = require('../cinema');

describe('Test cinema', () => {
    describe("Test showMovies function", () => {
        it("Test If the length of the input array is zero, the function returns the string: 'There are currently no movies to show.'", () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it("Test function should returns:  an array of available movies, separated by a comma and space", () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
            expect(cinema.showMovies(['Harry Potter'])).to.equal('Harry Potter');
        });
    });
    describe("Test ticketPrice function", () => {
        it("Test if function throw error when type is not present in the schedule with the types of projections", () => {
            expect(() => cinema.ticketPrice('test')).to.throw(Error, 'Invalid projection type.');
            expect(() => cinema.ticketPrice('')).to.throw(Error, 'Invalid projection type.');
        });
        it("Test function should returns:  an array of available movies, separated by a comma and space", () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    });
    describe("Test swapSeatsInHall function", () => {
        it("Test of one of the two numbers do not exist", () => {
            expect(cinema.swapSeatsInHall(-1, 15)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, -5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(13, 13)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('1.5', 15)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, '15')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(15)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it("Test if numbers are not integer", () => {
            expect(cinema.swapSeatsInHall(1.5, 15)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 15.5)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it("Test if one of the numbers is greater than the capacity of the hall - 20", () => {
            expect(cinema.swapSeatsInHall(21, 15)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 25)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it("Test if seats are equal to 0", () => {
            expect(cinema.swapSeatsInHall(0, 15)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 0)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it("Test with valid data should return correct result", () => {
            expect(cinema.swapSeatsInHall(1, 12)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 1)).to.equal("Successful change of seats in the hall.");
        });
    });
});