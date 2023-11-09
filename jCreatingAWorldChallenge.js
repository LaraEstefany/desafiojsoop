/*
9) -  Creating a world challenge
For this challenge, your tasks are to finish designing three classes: World, City, and Citizen.

For this task, finish the code below so that:

1 - the program successfully creates a 'world' object
2 - the program successfully adds 100 cities into the world object using add_city method.
3 - your program should create these cities with random city name that's 5 characters long and composed of alphabets (use lowercase).
4 - when a new city is created, it automatically adds 50 citizens to the city, with each citizen having a random age between 0 to 100.
    
World class needs to have

1 - a method called add_city - where you can pass the city name and it adds to its list
2 - an attribute called cities - where this would be an array containing all the city object
3 - constructor(num) - that creates num number of cities. for example new World(50) should create 50 new cities and store this.
4 - a method called random_city - where it pulls out a random city object
5 - a method called total_cities() - that returns the total number of cities in this world

City needs to have

1 - constructor(name) - that creates a new city with the given 'name' or if 'name' is blank, it can automatically create a random city name that's 5 characters long and composed of lowercase alphabets.
2 - a method called add_citizen - where you can create a new citizen
3 - an attribute called citizens - where this would be an array containing all the citizen objects

Citizen needs to have

1 - a constructor
2 - when a new citizen is created, it needs to automatically assign a random age (between 0 to 100)

The code structure can be:

class World {
}

class City {
}

class Citizen {
}

//create a world with 100 cities
let world = new World(100);

//adds a new city called 'hackerhero'
world.add_city('hackerhero');

//should pull out a random city object within the world and log its value
console.log('Random city name: ', world.random_city().name);
*/

class Citizen {
    constructor() {
        this.age = this.randomAge();
    };

    randomAge() {
        const ageR = Math.floor(Math.random() * 100);
        return ageR
    }

    object() {
        const pessoa = { age: this.age };
        return pessoa
    }
};

class City {
    constructor(name) {
        this.name = this.nameDefiner(name);
        this.citizens = [];
        var adc = this.add_citizen_inicial(50);
    };

    nameGenerator() {
        const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];
        const name = [];

        for (let i = 0; i < 5; i++) {
            const letra = alfabeto[Math.floor(Math.random() * 24)];
            name.push(letra);
        }

        return name.join('');
    };

    nameDefiner(name) {
        name == undefined ? this.name = this.nameGenerator() : this.name = name;

        return this.name
    };

    add_citizen() {
        let c1 = new Citizen();
        this.citizens.push(c1);
    };

    add_citizen_inicial(num) {
        for (let i = 0; i < num; i++) {
            let c1 = new Citizen();
            this.citizens.push(c1);
        }
    };

};

class World {
    constructor(num) {
        this.cities = [];
        var adc = this.add_random_city(num);
    };

    add_random_city(num) {
        for (let i = 0; i < num; i++) {
            const c1 = new City();
            this.cities.push(c1);
        }
    }

    add_city(name) {
        const c1 = new City(name);
        this.cities.push(c1);
    };

    random_city() {
        return this.cities[Math.floor(Math.random() * this.cities.length)]
    };

    total_cities() {
        return this.cities.length;
    };
};

let world = new World(100);
console.log(world);
console.log('Quantidade de cidades: ', world.total_cities());
world.add_city('hackerhero');
console.log(world);
console.log('Quantidade de cidades: ', world.total_cities());
console.log('Random city name: ', world.random_city().name);
console.log(world.random_city());