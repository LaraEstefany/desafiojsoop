/* 
1) Older Than Me

Create a method in the Person class that returns how another person's age compares. Given the instances p1, p2, and p3, which will be initialized with the attributes name and age, return a sentence in the following format:

{another person name} is {older than / younger than / the same age as} me.

Examples
p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(person) {
        this.anotherName = person.name;
        this.anotherAGe = person.age;

        if (this.anotherAGe > this.age) return `${this.anotherName} is older than me.`;

        if (this.anotherAGe == this.age) return `${this.anotherName} is the same age as me.`;

        if (this.anotherAGe < this.age) return `${this.anotherName} is younger than me.`;
    }
}

const p1 = new Person("Breno", 15);
const p2 = new Person("Renata", 30);
const p3 = new Person("Marcia", 30);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p2.compareAge(p3));