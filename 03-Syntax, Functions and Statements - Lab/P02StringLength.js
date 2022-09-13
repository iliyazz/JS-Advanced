// function stringLenght(string1, string2, string3){
// let sumOfLenght = string1.length + string2.length + string3.length;
// console.log(sumOfLenght);
// console.log(Math.floor(sumOfLenght / 3))
// }


// function stringLenght(...params){
// let sumOfLenght = params[0].length + params[1].length + params[2].length;
// console.log(sumOfLenght);
// console.log(Math.floor(sumOfLenght / 3))
// }

function stringLenght(...params){
let sumOfLenght = 0;
params.forEach(element => {
    sumOfLenght += element.length;
});
console.log(sumOfLenght);
console.log(Math.floor(sumOfLenght / 3))
}
stringLenght('chocolate', 'ice cream', 'cake');
stringLenght('pasta', '5', '22.3');