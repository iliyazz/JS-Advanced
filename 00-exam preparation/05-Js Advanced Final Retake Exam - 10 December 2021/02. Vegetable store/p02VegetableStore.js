class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        // debugger
        let addedVegetables = [];
        for (let vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let currentVegetable = this.availableProducts.find(x => x.type === type);

            if (!addedVegetables.includes(type)) {
                addedVegetables.push(type);
            }
            if (currentVegetable) {
                currentVegetable.quantity += quantity;
                if (price > currentVegetable.price) {
                    currentVegetable.price = price;
                }
            }
            else {
                this.availableProducts.push({
                    type,
                    quantity,
                    price
                })
            }
        }
        return `Successfully added ${addedVegetables.join(', ')}`
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);
            let currentVegetable = this.availableProducts.find(x => x.type === type);
            if (!currentVegetable) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if (quantity > currentVegetable.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += currentVegetable.price * quantity;
            currentVegetable.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }
    rottingVegetable(type, quantity) {
        let currentVegetable = this.availableProducts.find(x => x.type === type);
        if (!currentVegetable) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > currentVegetable.quantity) {
            currentVegetable.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        else {
            currentVegetable.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }
    revision() {
        let buffer = [];
        buffer.push('Available vegetables:');

        this.availableProducts.sort((a, b) => a.price - b.price).forEach(x => {
            buffer.push(`${x.type}-${x.quantity}-$${x.price}`)
        })
        buffer.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return buffer.join('\n');
    }
}


// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
//--------------------------------------------------
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));
//--------------------------------------------------
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
//--------------------------------------------------
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());






