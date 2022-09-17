function biggestElement(inputArr){
    let maxElement = Number.NEGATIVE_INFINITY;
    inputArr.forEach(elementArr => {
        let currentMaxEl = elementArr.reduce((a,b) => Math.max(a,b), -Infinity);
        if(maxElement < currentMaxEl){
            maxElement = currentMaxEl;
        }
    });
    //return maxElement;
    console.log(maxElement);
}
biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]);
biggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);