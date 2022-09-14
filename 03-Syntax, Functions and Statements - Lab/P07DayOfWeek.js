function dayOfWeek(input){
    const weekDay = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let index = weekDay.indexOf(input);
    if(index == -1){
        console.log('error');
    }
    else{
        console.log(index + 1);
    }
}
dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');