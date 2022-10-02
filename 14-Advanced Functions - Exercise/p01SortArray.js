function solve(arr, arg) {
    let sortedArr = arr.sort(arg == 'asc' ? (a, b) => a - b : (a, b) => b - a);
    return sortedArr;
}
solve([14, 7, 17, 6, 8], 'asc');
console.log('----------------');
solve([14, 7, 17, 6, 8], 'desc')