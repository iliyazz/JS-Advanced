function roadRadar(speed, area){
    let difference = 0;
    let speedLimit = 0;
    
    let isKeepSpeedLimit = true;
    switch (area){
        case 'motorway':
            speedLimit = 130;
            if(speed > 130){
                difference = speed - 130;
                isKeepSpeedLimit = false;
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if(speed > 90){
                difference = speed - 90;
                isKeepSpeedLimit = false;
            }
            break;
        case 'city':
            speedLimit = 50;
            if(speed > 50){
                difference = speed - 50;
                isKeepSpeedLimit = false;
            }
            break;
        case 'residential':
            speedLimit = 20;
            if(speed > 20){
                difference = speed - 20;
                isKeepSpeedLimit = false;
            }
            break;
    }
    let status = '';


    if(difference > 40){
        status = 'reckless driving';
    }
    else if(difference > 20){
        status = 'excessive speeding';
    }
    else if(difference > 0){
        status = 'speeding';
    }

    if(isKeepSpeedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
    else{
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');