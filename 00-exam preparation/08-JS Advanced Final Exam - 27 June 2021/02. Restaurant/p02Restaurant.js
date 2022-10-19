class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        products.forEach(element => {
            let [productName, productQuantity, productTotalPrice] = element.split(' ');
            if (productTotalPrice > this.budgetMoney) {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
            else {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = Number(productQuantity);
                }
                else {
                    this.stockProducts[productName] += Number(productQuantity);
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                this.budgetMoney -= productTotalPrice;
            }
        });
        return this.history.join('\n')
    }
    addToMenu(meal, products, price) {
        price = Number(price);
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products,
                price
            };
            let numberOfMeals = Object.keys(this.menu).length;
            if (numberOfMeals === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }
            else {
                return `Great idea! Now with the ${meal} we have ${numberOfMeals} meals in the menu, other ideas?`
            }
        }
        else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }
    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }
        let buffer = [];
        Object.keys(this.menu).forEach((key) => {
            buffer.push(`${key} - $ ${this.menu[key].price}`);
        })
        return buffer.join('\n')
    }
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        };
        let neededProduct = this.menu[meal].products;
        let copyOfStockProducts = JSON.parse(JSON.stringify(this.stockProducts));
        for (let i = 0; i < neededProduct.length; i++){
            let [product, quantity] = neededProduct[i].split(' ');
            quantity = Number(quantity);
                if (!this.stockProducts.hasOwnProperty(product) || this.stockProducts[product] < quantity) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
                copyOfStockProducts[product] -= quantity;
        }
            this.stockProducts = JSON.parse(JSON.stringify(copyOfStockProducts));
        let priceOfMeal = this.menu[meal].price
        this.budgetMoney += priceOfMeal;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${priceOfMeal}.`;
    }
}




// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
//----------------------------------------------
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
//----------------------------------------------
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());
//----------------------------------------------
// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));

