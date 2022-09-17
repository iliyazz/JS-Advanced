function extractIncreasingSubsequenceFromArray(inputArr){
    let resultArr = [inputArr[0]];
    inputArr.forEach((element, index) => {
        if(index > 0 && element >= resultArr[resultArr.length - 1]){
            resultArr.push(element);
        }
    });
    //console.log(resultArr);
    return resultArr;
}
extractIncreasingSubsequenceFromArray(
    [1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);
    console.log('-------------------')
extractIncreasingSubsequenceFromArray(
    [1, 
    2, 
    3,
    4]);
    console.log('-------------------')
extractIncreasingSubsequenceFromArray(
    [20, 
    3, 
    2, 
    15,
    6, 
    1]);