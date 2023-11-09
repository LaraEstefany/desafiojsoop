/*
6) Vending Machine

Your task is to create a function that simulates a vending machine.

Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

The return value is an object with 2 properties:

product: the product name that the user selected.
change: an array of coins (can be empty, must be sorted in descending order).

Examples
vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }

vendingMachine(products, 500, 0) ➞ "Enter a valid product number"

vendingMachine(products, 90, 1) ➞ "Not enough money for this product"

Notes
The products are fixed:
[
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' }, 
]

If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
If there's no change, return an empty array as the change.
*/

const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80, name: 'Small snack' },
];

const changes = [500, 200, 100, 50, 20, 10];

function vendingMachine(products, money, number) {

  const found = products.find((e) => e.number == number);

  if (!found) return "Enter a valid product number";

  if (money < found.price) return "Not enough money for this product"

  const difference = money - found.price;

  function finalObject() {
    return { product: found.name, change: changer(difference) };
  };

  function changer(difference) {
    if (difference == 0) return [];

    const result = [];

    for (const change of changes) {
      if (change <= difference) { result.push(change); difference -= change; };
    }

    return result;
  };

  return finalObject();
}

console.log(vendingMachine(products, 50, 10));
console.log(vendingMachine(products, 50, 1));
console.log(vendingMachine(products, 100, 1));
console.log(vendingMachine(products, 150, 1));
console.log(vendingMachine(products, 500, 1));