function negativePositiveNumbers(inputArr){
    let resultArr = [];
    inputArr.forEach(element => {
        element < 0 ? resultArr.unshift(element) : resultArr.push(element);
    });
    console.log(resultArr.join('\n'));
}


negativePositiveNumbers([7, -2, 8, 9]);
console.log('------------------------');
negativePositiveNumbers([3, -2, 0, -1]);