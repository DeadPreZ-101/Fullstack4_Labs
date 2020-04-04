//Exercise 1:
//
//● Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives
//from Car Class. The parameters for the Car class is the model and year. The parameters for the
//subclass is the model, year and balance.
//● Use the super key word in the Sedan subclass to set the model and name in base Car
//constructor.

//const car2 = new Car("Pontiac Firebird", 1976);
//console.log(car2.details());
//// Subclass - extends Car super class
//const sedan = new Sedan("Volvo SD", 2018, 30000);
//console.log(sedan.info());

// Output
// Model: Pontiac Firebird Engine 1976
// Volvo SD has a balance of $30000.00

class Car {
    constructor(model, engine) {
        this.model = model;
        this.engine = engine;
    }

    details() {
        return `${this.model} - ${this.engine}`;
    }
}

class Sedan extends Car {
    constructor(model, engine, amount) {
        super(model, engine);

        this.amount = amount;
    }

    info() {
        return `${this.model} has a balance of $${this.amount}`;
    }
}

const car2 = new Car("Pontiac Firebird", 1997);
console.log("Model: " + car2.details());

const sedan = new Sedan("Volvo SD", 1997, 30000);
console.log(sedan.info());
