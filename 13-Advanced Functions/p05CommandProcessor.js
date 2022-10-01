function solution(cmd) {
    let textToModify = '';
    return {
        append: (string) => textToModify += string,
        removeStart: (num) => textToModify = textToModify.substring(num),
        removeEnd: (num) => textToModify = textToModify.substring(0, textToModify.length - num),
        print: () => console.log(textToModify)
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
console.log('----------------');
let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();