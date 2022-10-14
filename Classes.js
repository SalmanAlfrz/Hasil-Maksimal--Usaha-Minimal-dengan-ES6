// //ES
function person(name, height) {
    this.name = name;
    this.height = height;
}

person.prototype.sayName = function() {
    this.console.log("Nama saya adalah " + this.name);
}

// //ES6
class person {
    constructor() {
        this.name = "Salman";
        this.height = 170;
    }
    sayName() {
        this.console.log("Nama saya adalah " + this.name);
    }
}

var person = class person {
    constructor() {
        this.name = "Salman";
        this.height = 170;
    }
    sayName() {
        this.console.log("Nama saya adalah " + this.name);
    }
}

class person {
    constructor() {
        this.name = "Salman";
        this.height = 170;
    }
    sayName() {
        this.console.log("Nama saya adalah " + this.name);
    }
}

class Developer extends person {
    constructor(name, height) {
        super(name, height);
        this.name = "Developer";
    }
}

var Kode = new Developer();
Kode.sayName();