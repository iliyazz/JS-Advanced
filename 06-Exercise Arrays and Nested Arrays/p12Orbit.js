function orbit(inputData) {
    let rows = inputData[0];
    let cols = inputData[1];
    let startRow = inputData[2];
    let startCol = inputData[3];
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1;
        }
    }
    printMatrix(matrix);
    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' '));
        }
    }
}
orbit([4, 4, 0, 0]);
console.log('------------------');
orbit([5, 5, 2, 2]);
console.log('------------------');
orbit([3, 3, 2, 2]);