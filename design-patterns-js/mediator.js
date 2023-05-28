function Member(name) {
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    send: function (message, toMember) {
        this.chatroom.send(message, this, toMember);
    },
    receive: function (message, fromMember) {
        console.log(`From ${fromMember.name} to ${this.name}: ${message}`);
    }
}

function Chatroom() {
    this.members = {};
}

Chatroom.prototype = {
    addMember: function (member) {
        this.members[member.name] = member;
        member.chatroom = this;
    },
    send: function (message, fromMember, toMember) {
        toMember.receive(message, fromMember);
    }
}

const ivan = new Member('Ivan');
const john = new Member('John');
const patrick = new Member('Patrick');

const chat = new Chatroom();

chat.addMember(ivan);
chat.addMember(john);
chat.addMember(patrick);

ivan.send('Hello John', john);
john.send('Whats up Ivan', ivan);
patrick.send('Hi yaaa', john)
patrick.send('Hi yaaa', ivan)



class Test {
    #test;

    set #myTest(test) {
        this.#test = test;
    }
    get #myTest() {
        return this.#test;
    }

    log(test) {
        this.#myTest = test;
        console.log(this.#myTest);
    }
}
const test = new Test();
test.log(555)