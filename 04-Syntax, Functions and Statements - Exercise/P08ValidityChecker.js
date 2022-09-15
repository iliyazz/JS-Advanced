function validityChecker(x1, y1, x2, y2){
    function isIntegerValue(a1, b1, a2, b2){
        let distance = Math.sqrt(Math.pow((a1 - a2), 2) + Math.pow((b1 - b2), 2));
        let validate = Number.isInteger(distance) ? 'valid' : 'invalid'
        console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is ${validate}`);
    }
    isIntegerValue(x1, y1, 0, 0);
    isIntegerValue(x2, y2, 0, 0);
    isIntegerValue(x1, y1, x2, y2);
}
validityChecker(3, 0, 0, 4);
console.log('----------------------')
validityChecker(2, 1, 1, 1);