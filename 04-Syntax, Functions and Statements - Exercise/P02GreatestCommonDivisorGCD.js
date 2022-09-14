function divisor(num1, num2){
    let minNum = Math.min(num1, num2);
    for(i = minNum; i > 0; i-- ){
        if(num1 % i == 0 && num2 % i == 0){
            console.log(i);
            break;
        }
    }
}
divisor(15, 5);
divisor(2154, 458);