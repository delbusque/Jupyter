function Developer(name) {
    this.name = name;
    this.type = 'Developer';
}

function Tester(name) {
    this.name = name;
    this.type = 'Tester';
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1: return new Developer(name);
            case 2: return new Tester(name);
        }
    }
}

function say() {
    console.log(`Hi, my name is ${this.name} and I am a ${this.type}`);
}

const employees = [];
const employeeFactory = new EmployeeFactory();

employees.push(employeeFactory.create('Josh', 1));
employees.push(employeeFactory.create('Mari', 2));
employees.push(employeeFactory.create('Tim', 1));

employees.forEach(empl => say.call(empl));