function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype = {
    setSalary: function (salary) {
        this.salary = salary;
    },
    getSalary: function () {
        return this.salary;
    },
    accept: function (visitorFunc) {
        visitorFunc(this);
    }
}

function increaseSalary(employee) {
    employee.setSalary(employee.getSalary() * 2)
}

const writer = new Employee('John', 2000);

writer.accept(increaseSalary);

console.log(writer.getSalary());