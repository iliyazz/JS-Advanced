function diagonalAttack(inputData) {
    let inputDataSize = inputData.length;
    let matrix = [];
    for (i = 0; i < inputDataSize; i++) {
        let currentArr = inputData[i].split(' ').map(Number);
        matrix[i] = currentArr;
    }
    let diagonal1 = 0;
    let diagonal2 = 0;
    for (i = 0; i < inputDataSize; i++) {
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[i][inputDataSize - 1 - i];

    }
    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' '));
        }
    }
    if (diagonal1 === diagonal2) {
        for (let row = 0; row < inputDataSize; row++) {
            for (let col = 0; col < inputDataSize; col++) {
                if (matrix[row][col] !== diagonal1 && row !== col && row !== inputDataSize - col - 1) {
                    matrix[row][col] = diagonal1;
                }
            }
        }
    }
    printMatrix(matrix);
}



diagonalAttack(
    [
        '5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'])
console.log('---------------')
diagonalAttack(
    [
        '1 1 1',
        '1 1 1',
        '1 1 0']);