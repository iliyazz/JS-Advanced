function solve(inputArr) {
    let allCars = new Map();
    for(let el of inputArr){
        [carBrand, carModel, producedCars] = el.split(' | ');
        if(!allCars.has(carBrand)){
            allCars.set(carBrand, new Map());
        }
        if(!allCars.get(carBrand).has(carModel)){
            allCars.get(carBrand).set(carModel, 0);
        }
        let oldProducedCar = allCars.get(carBrand).get(carModel);
        allCars.get(carBrand).set(carModel, oldProducedCar + Number(producedCars));
    }
    let result = [];
    for(let [brandKey, brandValue] of allCars){
        result.push(brandKey);
        for(let [modelKey, modelValue] of brandValue){
            result.push(`###${modelKey} -> ${modelValue}`);
        }
    }
    console.log(result.join('\n'));
}


solve(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
)