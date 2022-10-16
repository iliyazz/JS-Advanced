class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        })
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model, desiredMileage) {
        let currentCar = this.availableCars.find(x => x.model === model);
        if (!currentCar) {
            throw new Error(`${model} was not found!`);
        }
        if (currentCar.mileage > desiredMileage + 40000) {
            currentCar.price *= 0.90;
        }
        else if (currentCar.mileage > desiredMileage) {
            currentCar.price *= 0.95;
        }
        this.availableCars = this.availableCars.filter(x => x.model !== model);
        this.soldCars.push({
            model: model,
            horsepower: currentCar.horsepower,
            soldPrice: currentCar.price
        });
        this.totalIncome += currentCar.price;
        return `${model} was sold for ${currentCar.price.toFixed(2)}$`
    }
    currentCar() {
        if (!this.availableCars.length) {
            return 'There are no available cars';
        }
        let buffer = [];
        buffer.push('-Available cars:');
        this.availableCars.forEach(el => {
            buffer.push(`---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$`);
        });
        return buffer.join('\n');
    }
    salesReport(criteria) {
        let sortedCars = [];
        if (criteria === 'horsepower') {
            sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }
        else if (criteria === 'model') {
            sortedCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        else {
            throw new Error('Invalid criteria!');
        }
        let buffer = [];
        buffer.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        buffer.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.forEach(el => {
            buffer.push(`---${el.model} - ${el.horsepower} HP - ${el.soldPrice.toFixed(2)}$`);
        })
        return buffer.join('\n');
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));
//----------------------------------------------------------
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));
//----------------------------------------------------------
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());
//----------------------------------------------------------
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));



