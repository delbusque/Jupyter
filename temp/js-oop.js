const person = {
    first_name: 'Mukul',
    last_name: 'Latiyan',

    //method
    getFunction: function () {
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number: {
        mobile: '12345',
        landline: '6789'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);

const newPerson = Object.create(person);    // !!!!!

newPerson.town = "Plovdiv";

console.log(newPerson);                     // !!!!!
console.log(newPerson.first_name);
console.log(person);


// object constructor and traditional way

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getName = function () {
    return this.firstName + ' ' + this.lastName;
}

const Ivan = new Person('Ivan', 'Newman');

Ivan.phone = '1111111'

//classes - syntaxis sugar

class Vehicle {
    constructor(name, hp, maker) {
        this.name = name;
        this.hp = hp;
        this.maker = maker;
    }

    getDetails() {
        console.log(`This is ${this.name} by ${this.maker} `);
    }
}

let bike = new Vehicle('One', 134, 'Kawasaki');
bike.getDetails();



// Abstraction

function Car(model, carMaker) {
    this.model = model;
    let maker = carMaker;

    let getDetails = function () {
        return maker + ' ' + this.model
    }

    this.getInfo = function () {
        return maker + ' ' + this.model
    }
}

const newCar = new Car('A6', 'BMW');

console.log(newCar.getDetails);
console.log(newCar.getInfo());

console.log(newCar.model);
console.log(newCar.maker);



// Inheritance

class Pupil {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `Name: ${this.name}`
    }
}

class Student extends Pupil {

    constructor(name, id) {
        super(name);
        this.id = id;
        this.arg = arguments;
    }

    toArguments() {
        return `${this.arg.length}`
    }

    toString() {
        return `${super.toString()}, ID: ${this.id}`
    }
}

const student1 = new Student('Johny', 11112222);

console.log(student1.toString());
console.log(student1.toArguments());