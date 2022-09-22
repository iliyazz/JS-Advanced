function carFactory(car) {
    const engineEnum = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    }
    const carriageEnum = {
        hatchback: function (color) {
            return {
                type: "hatchback",
                color
            }
        },
        coupe: function (color) {
            return {
                type: "coupe",
                color
            }
        }
    }
    resultCar = {};
    resultCar["model"] = car.model;
    resultCar["engine"] = {};
    if(car.power <= 90){
        resultCar.engine.power = engineEnum["Small engine"].power;
        resultCar.engine.volume = engineEnum["Small engine"].volume;
    }
    else if(car.power <= 120){
        resultCar.engine.power = engineEnum["Normal engine"].power;
        resultCar.engine.volume = engineEnum["Normal engine"].volume;
    }
    else{
        resultCar.engine.power = engineEnum["Monster engine"].power;
        resultCar.engine.volume = engineEnum["Monster engine"].volume;
    }
    resultCar["carriage"] = carriageEnum[car.carriage](car.color);
    let size = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;
    resultCar["wheels"] = new Array(4).fill(size);
    //console.table(resultCar);
    //console.log(resultCar);
    return resultCar;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
console.log('---------------')
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});
