/*
5) Fruit Smoothie

Create a class Smoothie and do the following:

Create a constructor property called ingredients.
Create a getCost method which calculates the total cost of the ingredients used to make the smoothie.
Create a getPrice method which returns the number from getCost plus the number from getCost multiplied by 1.5. Round to two decimal places.
Create a getName method which gets the ingredients and puts them in alphabetical order into a nice descriptive sentence. If there are multiple ingredients, add the word "Fusion" to the end but otherwise, add "Smoothie". Remember to change "-berries" to "-berry". See the examples below.

Ingredient       Price
Strawberries     $1.50
Banana           $0.50
Mango            $2.50
Blueberries      $1.00
Raspberries      $1.00
Apple            $1.75
Pineapple        $3.50

Examples
s1 = new Smoothie(["Banana"])

s1.ingredients ➞ ["Banana"]

s1.getCost() ➞ "$0.50"

s1.getPrice() ➞ "$1.25"

s1.getName() ➞ "Banana Smoothie"
s2 = Smoothie(["Raspberries", "Strawberries", "Blueberries"])

s2.ingredients ➞ ["Raspberries", "Strawberries", "Blueberries"]

s2.getCost() ➞ "$3.50"

s2.getPrice() ➞ "$8.75"

s2.getName() ➞ "Blueberry Raspberry Strawberry Fusion"
*/

const prices = [
  {
    name: 'Strawberries',
    price: 1.50
  },
  {
    name: 'Banana',
    price: 0.50
  },
  {
    name: 'Mango',
    price: 2.50
  },
  {
    name: 'Blueberries',
    price: 1.00
  },
  {
    name: 'Raspberries',
    price: 1.00
  },
  {
    name: 'Apple',
    price: 1.75
  },
  {
    name: 'Pineapple',
    price: 3.50
  }
]

class Smoothie {
  constructor(ingredients) {
    this.ingredients = ingredients;
  };

  getCost() {
    let total = 0;

    this.ingredients.forEach(element => {
      prices.find((e) => { if (e.name == element) total += e.price });
    });

    return total;
  };

  getPrice() {
    const totalPrice = this.getCost() + (this.getCost() * 1.5);
    return totalPrice.toFixed(2);
  };

  getName() {
    const ingredientsSorted = this.ingredients.sort();

    let name = ingredientsSorted.join(' ');
    name = name.replace(/rries/g, 'rry');

    if (this.ingredients.length <= 1) { name = name + " Smoothie" }
    else if (this.ingredients.length > 1) { name = name + " Fusion" };

    return name;
  };

}

const s1 = new Smoothie(['Banana']);
const s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"]);

console.log(s1.ingredients);
console.log(s1.getCost());
console.log(s1.getPrice());
console.log(s1.getName());

console.log(s2.ingredients);
console.log(s2.getCost());
console.log(s2.getPrice());
console.log(s2.getName());