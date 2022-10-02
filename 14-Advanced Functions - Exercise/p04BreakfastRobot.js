function solution() {
    let recipiesEnum = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    let storedEnum = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    return function actionHandler(input){
        let inputArr = input.split(' ');
        let cmdArg = command();
        return cmdArg[inputArr[0]](inputArr[1], inputArr[2]);
    }
    function command(){
        return{ 
            restock: (microelement, quantity) => {
                storedEnum[microelement] += Number(quantity);
                return "Success";
            },
            prepare:(recipe, quantity) => {
                let isEnough = true;
                for(let [key, value] of Object.entries(recipiesEnum[recipe])){
                    if(value * quantity > storedEnum[key]){
                        isEnough = false;
                        return `Error: not enough ${key} in stock`;
                    }
                }
                for(let [key, value] of Object.entries(recipiesEnum[recipe])){
                    storedEnum[key] -= value * quantity;
                }
                return "Success";
            },
            report:() => {
                return  `protein=${storedEnum.protein} carbohydrate=${storedEnum.carbohydrate} fat=${storedEnum.fat} flavour=${storedEnum.flavour}`;
            }
        }
    }
}

let manager = solution();
// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 4"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));