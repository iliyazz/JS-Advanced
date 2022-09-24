function createSortedList() {
    const currentArr = [];
    const command = {
        add,
        remove,
        get,
        size: 0,
    };
    return command;
    function add(number){
        currentArr.push(number);
        this.size++;
        currentArr.sort((a, b) => a - b);
    }
    function remove(index){
        const valid = checkIndex(index);
        if (valid) {
            currentArr.splice(index, 1);
            this.size--;
        }
    }
    function get(index){
        const valid = checkIndex(index);
        if (valid) {
            return currentArr[index];
        }
    }
    function checkIndex(index){
        return index >= 0 && index < currentArr.length;
    }
}

let list = createSortedList();
let list1 = createSortedList();
//console.log(typeof(list));
//console.table(list);

list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

console.log('-------------')

list1.add(1);
list1.add(2);
list1.add(3);
console.log(list1.get(1));
list1.remove(1);
console.log(list1.get(1));


