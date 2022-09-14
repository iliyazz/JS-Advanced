function mathOperations(num1, num2, command){
let result = 0;
    switch(command){
        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2; break;
        case '*' : result = num1 * num2; break;
        case '/' : result = num1 / num2; break;
        case '%' : result = num1 % num2; break;
        case '**' : result = num1 ** num2; break;
    }
    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');