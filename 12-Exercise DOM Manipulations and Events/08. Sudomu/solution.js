function solve() {

    let [btnCheck, btnClear] = document.querySelectorAll("button");
    btnCheck.addEventListener('click', check);
    btnClear.addEventListener('click', clear);

    let rowsEl = Array.from(document.querySelectorAll('tbody tr'));
    let takeP = document.querySelector('div p');
    let isRowSuccess = true;
    let isColSuccess = true;
    let table = document.querySelector("table");
    
    function check() {
        let matrix = createMatrix();
        for (let i = 0; i < matrix.length; i++) {
            isRowSuccess = checkRow(matrix, i)
            isColSuccess = checkCol(matrix, i)
            if (!isRowSuccess || !isColSuccess) {
                break;
            }
        }
        if (isRowSuccess && isColSuccess) {
            table.style.border = "2px solid green";
            takeP.style.color = "green"
            takeP.textContent = "You solve it! Congratulations!";
        }
        else {
            table.style.border = "2px solid red";
            takeP.style.color = "red"
            takeP.textContent = "NOP! You are not done yet...";
        }
    }

    function clear() {
        table.style = 'none';
        takeP.textContent = '';
        let inputElements = document.querySelectorAll('td input');
        for (let input of inputElements) {
            input.value = '';
        }
    }
    function createMatrix() {
        let matrix = [];
        for (let row of rowsEl) {
            let rowElements = [];
            for (let el of row.querySelectorAll('td input')) {
                rowElements.push(Number(el.value));
            }
            matrix.push(rowElements);
        }
        return matrix;
    }

    function checkRow(matrix, row) {
        let currentRow = [];
        for(i = 0; i < matrix.length; i++){
            currentRow.push(matrix[row][i])
        }
        let sortedCurrentRow = currentRow.sort((a, b) => a - b);
        for (let i = 0; i < sortedCurrentRow.length; i++) {
            if (i + 1 !== sortedCurrentRow[i]) {
                return false;
            }
        }
        return true;
    }

    function checkCol(matrix, col) {
        let currentCol = [];
        for (let i = 0; i < matrix.length; i++) {
            currentCol.push(Number(matrix[i][col]))
        }
        let sortedCurrentCol = currentCol.sort((a, b) => a - b);
        for (let i = 0; i < sortedCurrentCol.length; i++) {
            
            if (i + 1 !== sortedCurrentCol[i]) {
                return false;
            }
        }
        return true;
    }
}