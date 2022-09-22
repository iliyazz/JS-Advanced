function heroicInventory(inputData) {
    let heroes = [];
    for (let data of inputData) {
        let hero = {};
        let dataSplit = data.split(' / ');
        let inventory;
        if (dataSplit.length === 3) {
            inventory = dataSplit[2].split(', ');
        }
        hero["name"] = dataSplit[0];
        hero["level"] = Number(dataSplit[1]);
        if (dataSplit.length === 3) {
            hero["items"] = inventory;
        }
        else{
            hero["items"] = [];
        }
        heroes.push(Object.assign({}, hero));
        //console.log(hero);
    }
    //console.table(heroes);

    let heroesInJSON = JSON.stringify(heroes);
    //console.log(heroesInJSON);
    return (heroesInJSON);
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
console.log("---------------");
heroicInventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
])
console.log("---------------");
heroicInventory([
    'Jake / 1000 '
])