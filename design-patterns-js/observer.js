function Subject() {
    this.observers = [];
}

Subject.prototype = {

    subscribe: function (fn) {
        this.observers.push(fn);
    },
    unsubscribe: function (fn) {
        this.observers = this.observers.filter(f => f !== fn);
    },
    fire: function () {
        this.observers.forEach(f => f.call());
    }
}

function observer() {
    console.log('Observer fired !');
}

function another() {
    console.log('Another fired !');
}

const subject = new Subject();

subject.subscribe(observer);
subject.subscribe(another);
subject.unsubscribe(observer);

subject.fire();