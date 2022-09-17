function processOddPositions(inputArr){
    let resultArr = inputArr
    .filter((element, index) => {
        return index % 2 !== 0;
    })
    .map(function(num){
        return num * 2;
    })
    .reverse();
    console.log(resultArr.join(' '));
}
processOddPositions([10, 15, 20, 25]);
console.log('---------------');
processOddPositions([3, 0, 10, 4, 7, 3]);