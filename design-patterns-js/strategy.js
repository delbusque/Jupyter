function Bus() {
    this.calculate = (people) => people * 14.5;
}

function Train() {
    this.calculate = (people) => people * 8.50;
}

function Taxi() {
    this.calculate = (people) => people * 60;
}

function Fare() {
    this.vehicle = null;

    this.setStrategy = (vehicle) => {
        this.vehicle = vehicle;
    }

    this.calculate = (people) => {
        return this.vehicle.calculate(people);
    }
}

const bus = new Bus();
const train = new Train();
const taxi = new Taxi();

const fare = new Fare();

let people;
let totalFare;

fare.setStrategy(taxi);
people = 2;
console.log(`Taxi fare for ${people} is ${fare.calculate(people)} lv.`);

fare.setStrategy(bus);
people = 4;
console.log(`Bus fare for ${people} is ${fare.calculate(people)} lv.`);