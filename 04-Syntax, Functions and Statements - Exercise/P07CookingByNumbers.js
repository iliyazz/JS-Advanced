function cookingByNumbers(number, ...commands){
    let result = Number(number);
    commands.forEach(element => {
        switch(element){
            case 'chop':
                result /= 2;
                console.log(result);
                break;
            case 'dice':
                result = Math.sqrt(result);
                console.log(result);
                break;    
            case 'spice':
                result += 1;
                console.log(result);
                break;
            case 'bake':
                result *= 3;
                console.log(result);
                break; 
            case 'fillet':
                result *= 0.8;
                console.log(result);
                break;
        }
    });
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('---------------------')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');