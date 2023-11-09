/*
3) Coffee Shop

Write a class called CoffeeShop, which has three instance variables:

1 - name : a string (basically, of the shop)
2 - menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price.
3 - orders : an emp
ty array
and seven methods:

1 - addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
2 - fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
3 - listOrders: returns the list of orders taken, otherwise, an empty array.
4 - dueAmount: returns the total amount due for the orders taken.
5 - cheapestItem: returns the name of the cheapest item on the menu.
6 - drinksOnly: returns only the item names of type drink from the menu.
7 - foodOnly: returns only the item names of type food from the menu.

IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

Examples:

tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process

tcs.addOrder("cinnamon roll") ➞  "Order added!"
tcs.addOrder("iced coffee") ➞ "Order added!"
tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order

tcs.dueAmount() ➞ 2.17

tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
tcs.fulfillOrder() ➞ "The iced coffee is ready!"
tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// all orders have been presumably served

tcs.listOrders() ➞ []
// an empty array is returned if all orders have been exhausted

tcs.dueAmount() ➞ 0.0
// no new orders taken, expect a zero payable

tcs.cheapestItem() ➞ "lemonade"
tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]

Notes
Round off due amount up to two decimal places.
*/

const menu1 = [
    {
        name: 'Café',
        type: 'Bebida',
        price: 2.5
    },
    {
        name: 'Café com Leite',
        type: 'Bebida',
        price: 3
    },
    {
        name: 'Bolo de Chocolate',
        type: 'Comida',
        price: 5.2
    },
    {
        name: 'Bolo de Chocolate Amargo',
        type: 'Comida',
        price: 6.5
    }

];
const menu2 = [
    {
        name: 'Leite',
        type: 'Bebida',
        price: 3
    },
    {
        name: 'Leite com Chocolate',
        type: 'Bebida',
        price: 4
    },
    {
        name: 'Bolo de Baunilha',
        type: 'Comida',
        price: 4.5
    },
    {
        name: 'Bolo de Baunilha e Morango',
        type: 'Comida',
        price: 6
    }
];
const menu3 = [
    {
        name: 'Chá',
        type: 'Bebida',
        price: 4
    },
    {
        name: 'Chá Gelado',
        type: 'Bebida',
        price: 4
    },
    {
        name: 'Bolo de Milho',
        type: 'Comida',
        price: 4.1
    },
    {
        name: 'Bolo de Milho com Goiabada',
        type: 'Comida',
        price: 5.5
    }
];

class CoffeeShop {
    constructor(name, menu) {
        this.name = name;
        this.menu = menu;
        this.orders = [];
    };

    addOrder(item) {
        const found = this.menu.find((e) => e.name == item);

        if (found) {
            this.orders.push(found.name);
            return `${found.name} is going to be prepared!`;
        } else {
            return `This item is currently unavailable!`;
        }
    };

    fullfillOrder() {
        if (this.orders.length != 0) {
            const item = this.orders.shift();
            return `The ${item} is ready!`
        } else {
            return `All orders have been fulfilled!`
        }
    };

    listOrders() {
        return this.orders;
    };

    dueAmount() {
        let total = 0;
        for (const item of this.orders) {
            const found = this.menu.find((e) => e.name == item);
            total += found.price;
        };
        return total;
    };

    cheapestItem() {
        const prices = [];
        for (const item of this.menu) {
            prices.push(item.price)
        };
        const cheapest = prices.sort((a, b) => a - b);
        const found = this.menu.find((e) => e.price == cheapest[0]);

        return found.name;
    }

    drinksOnly() {
        const drinks = [];
        for (const item of this.menu) {
            if (item.type == 'Bebida') drinks.push(item.name);
        };
        return drinks;
    }

    foodOnly() {
        const foods = [];
        for (const item of this.menu) {
            if (item.type == 'Comida') foods.push(item.name);
        };
        return foods;
    }
}

const cfs1 = new CoffeeShop("Café e ChocolateCake", menu1);
const cfs2 = new CoffeeShop("VanillaMilk Shop", menu2);
const cfs3 = new CoffeeShop("Chá & Milho LTDA", menu3);

console.log(cfs1.addOrder('Café'));
console.log(cfs1.addOrder('Bolo de Chocolate'));
console.log(cfs1.addOrder('Bolo de Milho'));
console.log(cfs1.listOrders());
console.log(cfs1.dueAmount());
console.log(cfs1.fullfillOrder());
console.log(cfs1.fullfillOrder());
console.log(cfs1.listOrders());
console.log(cfs1.dueAmount());
console.log(cfs1.fullfillOrder());
console.log(cfs1.cheapestItem());
console.log(cfs1.drinksOnly());
console.log(cfs1.foodOnly());

console.log(' ');

console.log(cfs2.addOrder('Café'));
console.log(cfs2.addOrder('Leite'));
console.log(cfs2.addOrder('Bolo de Baunilha'));
console.log(cfs2.listOrders());
console.log(cfs2.dueAmount());
console.log(cfs2.fullfillOrder());
console.log(cfs2.listOrders());
console.log(cfs2.cheapestItem());
console.log(cfs2.drinksOnly());
console.log(cfs2.foodOnly());

console.log(' ');

console.log(cfs3.addOrder('Café'));
console.log(cfs3.addOrder('Chá Gelado'));
console.log(cfs3.addOrder('Bolo de Milho'));
console.log(cfs3.addOrder('Chá'));
console.log(cfs3.listOrders());
console.log(cfs3.dueAmount());
console.log(cfs3.fullfillOrder());
console.log(cfs3.listOrders());
console.log(cfs3.fullfillOrder());
console.log(cfs3.listOrders());
console.log(cfs3.cheapestItem());
console.log(cfs3.drinksOnly());
console.log(cfs3.foodOnly());

// node api