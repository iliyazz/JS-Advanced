function magicMatrices(inputArr){
    let magicalNumber = inputArr[0].reduce((a, b) => a + b, 0);
    for(let row = 0; row < inputArr.length; row++){
        if(inputArr[row].reduce((a, b) => a + b, 0) !== magicalNumber){
            //console.log(false);
            return false;
        }
        if(row === 0){
            for(let col = 0; col < inputArr[row].length; col++){
                let currentColSum = 0;
                for( let i = 0; i < inputArr.length ;i++){
                    currentColSum += inputArr[col][i];
                }
                if(currentColSum !== magicalNumber){
                    //console.log(false);
                    return false;
                }
            }
        }
    }
    //console.log(true);
    return true
}
magicMatrices(
    [[1, 0],
    [0, 1]]);
console.log('---------------------');
magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
console.log('---------------------');
magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
console.log('---------------------');
magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);