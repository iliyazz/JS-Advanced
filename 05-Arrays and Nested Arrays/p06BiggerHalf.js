function biggerHalf(inputArr){
    let result = inputArr.sort((a, b) => a - b).slice(inputArr.length / 2);
    return result;
}
biggerHalf([4, 7, 2, 5]);
console.log('------------------')
biggerHalf([3, 19, 14, 7, 2, 19, 6]);