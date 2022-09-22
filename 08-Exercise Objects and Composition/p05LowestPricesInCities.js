function lowestPricesInCities(inputArr) {
    let products = {};
    for(let elInputArr of inputArr){
        let [town, product, price] = elInputArr.split(' | ');
        price = Number(price);
        if(products.hasOwnProperty(product)){
            let currentPrice = products[product]["price"];
            if(currentPrice > price){
                products[product] = {town, price};
            }
        }
        else{
            products[product] = {town, price};
        }
    }
    for(let [product, value] of Object.entries(products)){
        console.log(`${product} -> ${value.price} (${value.town})`);
    }
}
lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);