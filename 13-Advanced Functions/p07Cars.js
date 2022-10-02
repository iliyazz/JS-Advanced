function solve(input) {
    let dataArr = [];
    let action = carsManipulator();

    for (let task of input) {
        let [command, name, key, value] = task.split(' ');
        if (key == 'inherit') {
            command += key;
            key = value;
        }
        action[command](name, key, value);
    }

    function carsManipulator() {
        let result = {
            create: (name) => {
                dataArr[name] = {};
            },
            createinherit: (name, nameOfParent) => {
                let newPrototypeObject = Object.create(dataArr[nameOfParent]);
                dataArr[name] = newPrototypeObject;
            },
            set: (name, key, value) => {
                dataArr[name][key] = value;
            },
            print: (name) => {
                let printingArr = [];
                for (let property in dataArr[name]) {
                    printingArr.push(`${property}:${dataArr[name][property]}`);
                }
                console.log(printingArr.join(','));
            }
        }
        return result;
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);


