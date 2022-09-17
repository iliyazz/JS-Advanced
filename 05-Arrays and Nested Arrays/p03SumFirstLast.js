function sumFirstLast(arr){
    return Number(arr.shift()) + Number(arr.pop());
}
console.log(sumFirstLast(['20', '30', '40']));
console.log('-----------------');
console.log(sumFirstLast(['5', '10']));