function solve(input) {
    let processor = (function () {
        let list = [];
        return function (element) {
            let [command, text] = element.split(' ');
            let action = {
                add: () => list.push(text),
                remove: () => list = list.filter(x => x !== text),
                print: () => console.log(list.join(','))
            }
            action[command].call(action);
        }
    })();

    for (let el of input) {
        processor(el);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log('-----------------');
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);