function timeToWalk(steps, footprint, speed){
    let speedMeterInSecond = speed * 1000 / 3600;
    let distanceMeters = steps * footprint;
    let timeInSeconds = distanceMeters / speedMeterInSecond;
    let numberOfBreaks = Math.floor(distanceMeters / 500);
    timeInSeconds += numberOfBreaks * 60;
    let hour = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds - hour * 3600) / 60);
    let seconds =  Math.round(timeInSeconds - hour * 3600 - minutes * 60);
    
    hour = hour < 10 ? '0'+ hour : hour;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    seconds = seconds < 10 ? '0'+ seconds : seconds;
    console.log(`${hour}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);