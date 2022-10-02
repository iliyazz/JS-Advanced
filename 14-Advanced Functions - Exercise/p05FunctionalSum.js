function add(num){
    sum = 0;
    function inner(numInner){
        sum += numInner;
        return inner;
    }
    inner.toString = () => sum;
    return inner(num);
}

// let add = (function () {
//     let total = 0;
//     return function sum(a) {
//         total += a;
//         sum.toString = () => total;
//         return sum;
//     }
// })();



//console.log(add(6)(7));

console.log(add(1)(6)(-3)(6)(3)(2).toString())
//console.log(add(1)(6)(-3).toString())
//add(1);
//add(1)(6)(-3)(6)(3)(2)