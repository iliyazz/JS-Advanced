function solve(...input){
    let data = {};
    input.forEach(element => {
        let type = typeof(element);
        if(!data.hasOwnProperty(type)){
            data[type] = 0;
        }
        data[type]++;
        console.log(`${type}: ${element}`);
    });
    let sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
    for(let el of sorted){
        console.log(`${el[0]} = ${el[1]}`)
    }
}

solve('cat', 'cat2', 42, function () { console.log('Hello world!'); })