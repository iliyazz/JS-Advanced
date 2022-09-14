function neededMoney(type, weight, price){
    console.log(`I need $${(price * weight / 1000).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${type}.`)
}
neededMoney('orange', 2500, 1.80);
neededMoney('apple', 1563, 2.35);