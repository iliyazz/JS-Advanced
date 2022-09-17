function diagonalSums(matrix){
    let matrixLength = matrix.length;
    let diagonal1 = 0;
    let diagonal2 = 0;
    for(let i = 0; i < matrixLength; i++){
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[i][matrixLength - 1 -i]
    }
    console.log(`${diagonal1} ${diagonal2}`);
}
diagonalSums(
    [[20, 40],
    [10, 60]]);
diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);