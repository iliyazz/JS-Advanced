function sameNumber(num){
    let numString = num.toString();
    let sum = Number(numString[0]);
    let firstChar = numString[0];
    let isSame = true;
    for(i = 1; i < numString.length; i++){
        sum += Number(numString[i]);
        if(firstChar !== numString[i]){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumber(2222222);
sameNumber(1234);
sameNumber(1);