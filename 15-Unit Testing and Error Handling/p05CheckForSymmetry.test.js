const { expect } = require('chai');
const { isSymmetric } = require('./p05CheckForSymmetry');

describe("isSymmetric function validation", () => {
    it("Should return false if argument is not array", () => {
        //Arrange
        let arr1 = "notArrayArgument";
        let arr2 = "notArrAton";
        //Act
        let result1 = isSymmetric(arr1);
        let result2 = isSymmetric(arr2);
        //Assert
        expect(result1).to.be.false;
        expect(result2).to.be.false;
    })
    it("Should return false if argument is not array", () => {
        //Arrange
        let arr1 = false;
        let arr2 = true;
        //Act
        let result1 = isSymmetric(arr1);
        let result2 = isSymmetric(arr2);
        //Assert
        expect(result1).to.be.false;
        expect(result2).to.be.false;
    })
    it("Should return false if argument is not array", () => {
        //Arrange
        let arr1 = 5;
        let arr2 = -10;
        let arr3 = 0;
        //Act
        let result1 = isSymmetric(arr1);
        let result2 = isSymmetric(arr2);
        let result3 = isSymmetric(arr3);
        //Assert
        expect(result1).to.be.false;
        expect(result2).to.be.false;
        expect(result3).to.be.false;
    })

    
    it("Should return true if argument array is symmetric", () => {
        //Arrange
        let arr1 = [3, -8, 0, 876, -5, -5, 876, 0, -8, 3];
        let arr2 = [3, -8, 0, 876, -5, 876, 0, -8, 3];
        let arr3 = ['3', '-8', '0', '876', '-5', '-5', '876', '0', '-8', '3'];
        let arr4 = ['3', '-8', '0', '876', '-5', '876', '0', '-8', '3'];
        let arr5 = [true, true, false, true, false, false, true, false, true, true];
        let arr6 = [true, true, false, true, false, true, false, true, true];
        //Act
        let result1 = isSymmetric(arr1);
        let result2 = isSymmetric(arr2);
        let result3 = isSymmetric(arr3);
        let result4 = isSymmetric(arr4);
        let result5 = isSymmetric(arr5);
        let result6 = isSymmetric(arr6);
        //Assert
        expect(result1).to.be.true;
        expect(result2).to.be.true;
        expect(result3).to.be.true;
        expect(result4).to.be.true;
        expect(result5).to.be.true;
        expect(result6).to.be.true;
    })
    it("Should return false if argument array is not symmetric", () => {
        //Arrange
        let arr1 = [3, -8, '0', 876, -5, -5, 876, 0, -8, -3];
        let arr2 = [4, -8, 0, 876, -5, 876, 0, -8, 3];
        let arr3 = ['3', '-8', '0', '876', '-5', '-5', '8766', '0', '-8', '3'];
        let arr4 = ['3', '-8', '0', ' 876', '-5', '876', '0', '-8', '3'];
        let arr5 = [true, true, false, true, false, false, false, false, true, true];
        let arr6 = [true, true, true, true, false, true, false, true, true];
        let arr7 = [3, -8, 0, 876, -5, -5, 876, 0, -8, '3'];
        let arr8 = [3, -8, '0', 876, -5, 876, 0, -8, 3];

        //Act
        let result1 = isSymmetric(arr1);
        let result2 = isSymmetric(arr2);
        let result3 = isSymmetric(arr3);
        let result4 = isSymmetric(arr4);
        let result5 = isSymmetric(arr5);
        let result6 = isSymmetric(arr6);
        let result7 = isSymmetric(arr7);
        let result8 = isSymmetric(arr8);
        //Assert
        expect(result1).to.be.false;
        expect(result2).to.be.false;
        expect(result3).to.be.false;
        expect(result4).to.be.false;
        expect(result5).to.be.false;
        expect(result6).to.be.false;
        expect(result7).to.be.false;
        expect(result8).to.be.false;
    })
})