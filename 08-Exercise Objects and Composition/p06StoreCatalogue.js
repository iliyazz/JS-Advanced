function storeCatalogue(inputArr) {
    let products = {};
    for(let input of inputArr){
        let productArr = input.split(' : ');
        let name = productArr[0];
        let price = Number(productArr[1]);
        products[name] = price;
    }
    let keys = Object.keys(products).sort((a, b) => a.localeCompare(b));
    let currentFirstLetter = '';
    for(let key of keys){
        if(currentFirstLetter !== key[0]){
            console.log(key[0])
            currentFirstLetter = key[0];
        }
        console.log(`  ${key}: ${products[key]}`)
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);