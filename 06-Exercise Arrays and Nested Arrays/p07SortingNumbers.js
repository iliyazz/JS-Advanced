function sortingNumbers(inputArr){
    inputArr.sort((a, b) => a-b);
    let resultArr = [];
    let iSSmallest = true;
    let inputArrLength = inputArr.length;
    for(i = 0; i < inputArrLength; i++){
        if(iSSmallest){
            resultArr.push(inputArr.shift());
            iSSmallest = false;
        }
        else{
            resultArr.push(inputArr.pop());
            iSSmallest = true;
        }
    }
    //console.log(resultArr);
    return resultArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);