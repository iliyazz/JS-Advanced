const { expect, assert } = require('chai');
const { rgbToHexColor } = require('./p06RGBToHex');

let [red1, green1, blue1] = [1.2, 5, 9];
console.log(red1)



describe("rgbToHexColor function validation", () => {
    it("Should return undefined if some of arguments are float number", () => {
        //Arrange
        let [red1, green1, blue1] = [1.2, 5, 9];
        let [red2, green2, blue2] = [1, 5.3, 9];
        let [red3, green3, blue3] = [1, 5, 9.8];
        //Act
        let result1 = rgbToHexColor(red1, green1, blue1);
        let result2 = rgbToHexColor(red2, green2, blue2);
        let result3 = rgbToHexColor(red3, green3, blue3);
        //Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
        expect(result3).to.be.undefined;
    })
    it("Should return undefined if some of arguments are string", () => {
        //Arrange
        let [red1, green1, blue1] = ['1', 5, 9];
        let [red2, green2, blue2] = [1, '5', 9];
        let [red3, green3, blue3] = [1, 5, '9'];
        //Act
        let result1 = rgbToHexColor(red1, green1, blue1);
        let result2 = rgbToHexColor(red2, green2, blue2);
        let result3 = rgbToHexColor(red3, green3, blue3);
        //Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
        expect(result3).to.be.undefined;
    })
    it("Should return undefined if some of arguments are boolean", () => {
        //Arrange
        let [red1, green1, blue1] = [true, 5, 9];
        let [red2, green2, blue2] = [1, true, 9];
        let [red3, green3, blue3] = [1, 5, true];
        //Act
        let result1 = rgbToHexColor(red1, green1, blue1);
        let result2 = rgbToHexColor(red2, green2, blue2);
        let result3 = rgbToHexColor(red3, green3, blue3);
        //Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
        expect(result3).to.be.undefined;
    })
    it("Should return undefined if some of arguments are negative", () => {
        //Arrange
        let [red1, green1, blue1] = [-1, 5, 9];
        let [red2, green2, blue2] = [1, -5, 9];
        let [red3, green3, blue3] = [1, 5, -9];
        //Act
        let result1 = rgbToHexColor(red1, green1, blue1);
        let result2 = rgbToHexColor(red2, green2, blue2);
        let result3 = rgbToHexColor(red3, green3, blue3);
        //Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
        expect(result3).to.be.undefined;
    })
    it("Should return undefined if some of arguments are over 255", () => {
        //Arrange
        let [red1, green1, blue1] = [256, 5, 9];
        let [red2, green2, blue2] = [1, 256, 9];
        let [red3, green3, blue3] = [1, 5, 256];
        //Act
        let result1 = rgbToHexColor(red1, green1, blue1);
        let result2 = rgbToHexColor(red2, green2, blue2);
        let result3 = rgbToHexColor(red3, green3, blue3);
        //Assert
        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
        expect(result3).to.be.undefined;
    })
    it("Should return undefined if some of arguments are missing", () => {
        //Arrange
        let [red1, green1, blue1] = [256, 5];
        //Act
        let result1 = rgbToHexColor(red1, green1, blue1);
        //Assert
        expect(result1).to.be.undefined;
    })
    it("Should return undefined if no arguments", () => {
        //Arrange
        let [red1, green1, blue1] = [];
        //Act
        let result1 = rgbToHexColor(red1, green1, blue1);
        //Assert
        expect(result1).to.be.undefined;
    })
    it("Should return correct result if arguments are integer between 0 and 255", () => {
        //Arrange
        let [red1, green1, blue1] = [0, 0, 0];
        let [red2, green2, blue2] = [135, 84, 224];
        let [red3, green3, blue3] = [255, 255, 255];
        //Act
        let result1 = rgbToHexColor(red1, green1, blue1);
        let result2 = rgbToHexColor(red2, green2, blue2);
        let result3 = rgbToHexColor(red3, green3, blue3);
        //Assert
        expect(result1).to.be.equal('#000000');
        expect(result2).to.be.equal('#8754E0');
        expect(result3).to.be.equal('#FFFFFF');
    })
})


