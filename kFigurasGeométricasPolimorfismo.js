/*
10) - Figuras geométricas com polimorfismo

Crie 3 classes que representam figuras geométricas (shapes).
Através do conceito de “abstração”, as classes “especializadas” Circle, Rectangle e Triangle herdam de Shape.

Utilizando polimorfismo, crie uma função chamada calculateTotalAreaOfShapes. Esta função deverá rr Circle’s, Rectaneceber um array de Shapes que podem segle’s e etc, e deverá somar a área de todos eles e imprimir  a soma na tela.

A definição das classes é:

class Shape {
    area() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}

A função a ser criada será:

function cumulateShapes(shapes) {
    //.... implemente a lógica
}

A utilização da função se dará da seguinte forma:

const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];
console.log(cumulateShapes(shapes));
*/

class Shape {
    area() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b;
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}

function calculateTotalAreaOfShapes(shapes) {
    let total = 0;

    for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        total += shape.area();
    }

    return total.toFixed(2);
}

const s1 = new Shape();
const c1 = new Circle(3);
const r1 = new Rectangle(2, 3);
const t1 = new Triangle(3, 4);
const c2 = new Circle(2);

console.log(c1.area(), c1.toString());
console.log(r1.area(), r1.toString());
console.log(t1.area(), t1.toString());
console.log(c2.area(), c2.toString());

const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];
console.log(calculateTotalAreaOfShapes(shapes));