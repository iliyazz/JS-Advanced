function ticTacToe(inputData){
    let matrix = [];
    for(i = 0; i < 3; i++){
        matrix[i] = new Array(3).fill(false).map(Boolean);
    }
    let player = 'X';
    for (const element of inputData) {
        const coordinates = element.split(' ').map(Number);
        if(matrix[coordinates[0]][coordinates[1]]){
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        matrix[coordinates[0]][coordinates[1]] = player;
        //printMatrix(matrix);
        for(let row = 0; row < 3; row++){
            if(matrix[row].every(x => x === player)){
                console.log(`Player ${player} wins!`);
                for(let row = 0; row < matrix.length; row++){
                    console.log(matrix[row].join('\t'));
                }
                //printMatrix(matrix);
                return;
            }
        }
        for(let row = 0; row < 3; row++){
            if(matrix[row][0] === player && matrix[row][1] === player &&matrix[row][2] === player){
                console.log(`Player ${player} wins!`);
                for(let row = 0; row < matrix.length; row++){
                    console.log(matrix[row].join('\t'));
                }
                //printMatrix(matrix);
                return;
            }
        }

        if((matrix[0][0] === player && matrix[1][0] === player && matrix[2][0] === player) || (matrix[0][1] === player && matrix[1][1] === player && matrix[2][1] === player) || (matrix[0][2] === player && matrix[1][2] === player && matrix[2][2] === player)){
            console.log(`Player ${player} wins!`);
            for(let row = 0; row < matrix.length; row++){
                console.log(matrix[row].join('\t'));
            }
            //printMatrix(matrix);
                return;
        }

        if((matrix[0][0] === player && matrix[1][1] === player && matrix[2][2] === player) || (matrix[0][2] === player && matrix[1][1] === player && matrix[2][0] === player)){
            console.log(`Player ${player} wins!`);
            for(let row = 0; row < matrix.length; row++){
                console.log(matrix[row].join('\t'));
            }
            //printMatrix(matrix);
                return;
        }
        let isWinner = true;
            if(!((matrix[0].some(x => x === false)) || (matrix[1].some(x => x === false)) || (matrix[2].some(x => x === false)))){
                isWinner = false;
            }
        if(!isWinner){
            console.log("The game ended! Nobody wins :(");
            for(let row = 0; row < matrix.length; row++){
                console.log(matrix[row].join('\t'));
            }
            //printMatrix(matrix);
            return;
        }
        player === 'X' ? player = 'O' : player = 'X';
    }
}
function printMatrix(matrix){
    for(let row = 0; row < matrix.length; row++){
        console.log(matrix[row].join('\t'));
    }
}
ticTacToe(
    ["0 1",
    "0 0",
    "0 2", 
    "2 0",
    "1 1",
    "1 0",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
console.log('----------------------')

ticTacToe(
    ["0 1",
    "0 0",
    "0 2", 
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
console.log('----------------------')
ticTacToe(
    ["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
console.log('----------------------')
ticTacToe(
    ["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);