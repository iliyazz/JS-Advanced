function daysInAMonth(input1, input2){
    let date = new Date(input2, input1, 0);
    let days = date.getDate();
    console.log(days);
}
daysInAMonth(1, 2012);
daysInAMonth(2, 2021);