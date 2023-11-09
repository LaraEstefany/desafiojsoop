/* 
2) The Sweetest Ice Cream
Create a function that takes an array of instances from the class IceCream and returns the sweetness value of the sweetest ice cream.

Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:

FLAVORS         SWEETNESS
Plain           00
Vanilla         05
ChocolateChip   05
Strawberry      10
Chocolate       10

You'll be given instance properties in the order flavor, numSprinkles.

Examples
ice1 = IceCream("Chocolate", 13)    // value of 23
ice2 = IceCream("Vanilla", 0)       // value of 05
ice3 = IceCream("Strawberry", 7)    // value of 17
ice4 = IceCream("Plain", 18)        // value of 18
ice5 = IceCream("ChocolateChip", 3) // value of 08

sweetestIcecream([ice1, ice2, ice3, ice4, ice5] ) ➞ 23
sweetestIcecream([ice3, ice1]) ➞ 23
sweetestIcecream([ice3, ice5]) ➞ 17

Notes
Remember to only return the sweetness value.
IceCream class is provided (check the Tests tab).
*/

class IceCream {
    constructor(flavor, numSprinkles) {
        this.flavor = flavor;
        this.numSprinkles = numSprinkles;
    }

    sweetnessNum() {
        if (this.flavor == "Plain") this.sweetness = 0;
        if (this.flavor == "Vanilla") this.sweetness = 5;
        if (this.flavor == "ChocolateChip") this.sweetness = 5;
        if (this.flavor == "Strawberry") this.sweetness = 10;
        if (this.flavor == "Chocolate") this.sweetness = 10;

        return this.sweetness;
    }

    totalSweetness() {
        this.total = this.sweetnessNum() + this.numSprinkles
        return this.total
    }
}

function sweetestIcecream(list) {
    const listOfStweetness = [];

    for (const iceCream of list) {
        listOfStweetness.push(iceCream.totalSweetness());
    }

    const sweestest = Math.max.apply(null, listOfStweetness);

    return sweestest;
}

ice1 = new IceCream("Chocolate", 13);    // value of 23
ice2 = new IceCream("Vanilla", 0);       // value of 05
ice3 = new IceCream("Strawberry", 7);    // value of 17
ice4 = new IceCream("Plain", 18);        // value of 18
ice5 = new IceCream("ChocolateChip", 3); // value of 08

// sweetestIcecream([ice1, ice2, ice3, ice4, ice5] ) ➞ 23
// sweetestIcecream([ice3, ice1]) ➞ 23
// sweetestIcecream([ice3, ice5]) ➞ 17

console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
console.log(sweetestIcecream([ice3, ice1]));
console.log(sweetestIcecream([ice3, ice5]));