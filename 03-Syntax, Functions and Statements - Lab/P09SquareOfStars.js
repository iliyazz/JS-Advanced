function square(input = 5){
    let line = '';
    for(j = 0; j < input; j++){
        if(j == input - 1){
            line += '*';
        }
        else{
            line += '* '
        }
    }
    for(i = 0; i < input; i++){
        console.log(line);
    }
}
square();
square(1);
square(2);
square(5);
square(7);