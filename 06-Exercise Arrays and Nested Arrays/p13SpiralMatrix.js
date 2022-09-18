function spiralMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }
    let value = 0;
    let steps = rows * cols;
    let rowMin = 0;
    let colMin = 0;
    let rowMax = rows - 1;
    let colMax = cols - 1;

    for (i = 0; i <= steps; i++) {
        for (let currentCol = colMin; currentCol <= colMax && value < steps; currentCol++) {
            value++;
            matrix[rowMin][currentCol] = value;
        }
        rowMin++;
        for (let currentRow = rowMin; currentRow <= rowMax && value < steps; currentRow++) {
            value++;
            matrix[currentRow][colMax] = value;
        }
        colMax--;
        for (let currentCol = colMax; currentCol >= colMin && value < steps; currentCol--) {
            value++;
            matrix[rowMax][currentCol] = value;
        }
        rowMax--;
        for (let currentRow = rowMax; currentRow >= rowMin && value < steps; currentRow--) {
            value++;
            matrix[currentRow][colMin] = value;
        }
        colMin++;
    }
    //console.table(matrix);
    printMatrix(matrix);
    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' '));
        }
    }
}

spiralMatrix(5, 8);
console.log('--------------');
spiralMatrix(3, 3);

