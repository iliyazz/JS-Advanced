function solve(input) {
    class Juices { constructor() { this.products = {}; }; }
    let products = new Juices();
    let bottles = new Map();
    for (let el of input) {
        [currentJuice, currentQuantity] = el.split(' => ');
        if (!products[currentJuice]) { products[currentJuice] = 0; }
        products[currentJuice] += Number(currentQuantity);
        produceBottle(products, currentJuice);
    }
    function produceBottle(products, currentJuice) {
        if (products[currentJuice] >= 1000) {
            let res = products[currentJuice] % 1000;
            let currentBottles = (products[currentJuice] - res) / 1000;
            products[currentJuice] = res;
            if (!bottles.has(currentJuice)) { bottles.set(currentJuice, 0); }
            bottles.set(currentJuice, bottles.get(currentJuice) + currentBottles);
        }
    }
    bottles.forEach((values, keys) => {
        console.log(`${keys} => ${values}`);
    })
}

solve(
    [
        'Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]
)
console.log('--------------------');
solve(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]
)