function solve(inputArr) {
    let allCars = {};
    for(let el of inputArr){
        [carBrand, carModel, producedCars] = el.split(' | ');
        if(!allCars.hasOwnProperty(carBrand)){
            allCars[carBrand]= {};
        }
        if(!allCars[carBrand].hasOwnProperty(carModel)){
            allCars[carBrand][carModel] = 0;
        }
        allCars[carBrand][carModel] += Number(producedCars);
    }
    let result = [];
    for(let carBrand in allCars){
        result.push(carBrand);
        Object.entries(allCars[carBrand])
        .forEach(element => result.push(`###${element[0]} -> ${element[1]}`));
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