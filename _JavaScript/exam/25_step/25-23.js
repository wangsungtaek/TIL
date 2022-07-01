class Person {
    name = ''

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi My name is ${this.name}`);
    }
}

const me = new Person('Lee');
const m2 = new Person('Wang');

me.sayHi();
m2.sayHi();
console.log(me == m2);

console.log('1 : ', Object.getPrototypeOf(me));
console.log('2 : ', Person.prototype);
console.log('3 : ', Person);