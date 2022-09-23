function townsToJSON(inputArr) {
    let splitedArr = [];
    for (let el of inputArr) {
        el = el.substring(2, el.length - 2);
        let currentElAsArr = el.split('|');
        currentElAsArr = currentElAsArr.map(e => e.trim());
        splitedArr.push(currentElAsArr);
    }

    let resultArr = [];
    let column1Name = splitedArr[0][0];
    let column2Name = splitedArr[0][1];
    let column3Name = splitedArr[0][2];
    for (let i = 1; i < splitedArr.length; i++) {
        let currentObj = {
            [column1Name]: splitedArr[i][0],
            [column2Name]: Number(Number(splitedArr[i][1]).toFixed(2)),
            [column3Name]: Number(Number(splitedArr[i][2]).toFixed(2))
        }
        resultArr.push(currentObj);
    }
    resultToJSON = JSON.stringify(resultArr);

    console.log(resultToJSON);
}
townsToJSON(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ])
console.log('---------------');
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
])

