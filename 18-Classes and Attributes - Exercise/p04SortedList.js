class List {
    constructor() {
        this.arr = [];
    }
    add(element) {
        this.arr.push(Number(element));
        this.arr = this.arr.sort((a, b) => a - b);
        this.size++;
    }
    remove(index) {
        if (index >= 0 && index < this.size) {
            this.arr.splice(index, 1);
            this.size--;
        }
        else{
            throw new Error('index is out of range');
        }
    }
    get(index) {
        if (index >= 0 && index < this.size) {
            return this.arr[index];
        }
        throw new Error('index is out of range');
    }
    size = 0;
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(3));
list.remove(1);
console.log(list.get(1));
console.log(list.arr.join(', '))
