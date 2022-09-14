function largestNumber(num1, num2, num3){
    let maxNumber = 0;
    if(num1 > num2 && num1 > num3){
        maxNumber = num1;
    }
    else if(num2 > num3){
        maxNumber = num2;
    }
    else{
        maxNumber = num3
    }
    console.log(`The largest number is ${maxNumber}.`)
}

largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)