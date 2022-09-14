function sum(num1, num2){
    let result = 0;
    for(i = Number(num1); i <= Number(num2); i++){
        result += i;
    }
    console.log(result);
}
sum('1', '5');
sum('-8', '20');