(function solve() {
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this;
    }
    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this + str;
    }
    String.prototype.isEmpty = function (str) {
        return this.length === 0 ? true : false;
    }
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }
        if (n < 4) {
            return '.'.repeat(n);
        }

        let wordsArr = this.split(' ');
        result = [];
        if (wordsArr.length === 1) {
            wordsArr[0] = wordsArr[0].slice(0, n - 3);
            return (wordsArr.join(' ').trim() + '...').toString();
        }
        for (let word of wordsArr) {
            if (result.join(' ').length + word.length + 3 > n) {
                break;
            }
            result.push(word);
        }
        return (result.join(' ').trim() + '...').toString();
    }
    String.format = function (string, ...params) {
        params.forEach((param, index) => string = string.replace(`{${index}}`.toString(), param));
        return string;
    }
}());



// let str = '';
// console.log(str.isEmpty());

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}', 'dog');
console.log(str);
