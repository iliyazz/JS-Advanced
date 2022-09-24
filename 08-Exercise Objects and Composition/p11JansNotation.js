function jansNotation(inputArr) {
    let resultArr = [];
    let operationsUnum = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }

    for (let element of inputArr) {
        if (typeof (element) === "number") {
            resultArr.push(element);
            continue;
        }
        if (resultArr.length < 2) {
            console.log("Error: not enough operands!");
            return;
        }
        let numberA = resultArr.pop();
        let numberB = resultArr.pop();
        let result = operationsUnum[element](numberB, numberA);
        resultArr.push(result);
    }
    if (resultArr.length !== 1) {
        console.log("Error: too many operands!");
        return;
    }
    console.log(resultArr[0]);
}
jansNotation(
    [
        3,
        5,
        '+',
        3
    ]
);
jansNotation(
    [
        3,
        4,
        '+'
    ]
);
console.log('-------------');
jansNotation([
    5,
    3,
    4,
    '*',
    '-'
])
