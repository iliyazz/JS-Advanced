function smallestTwoNumbers(inputArr){
    let result = inputArr.sort((a, b) => a-b).slice(0,2);
    console.log(result.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
console.log('-------------------');
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);