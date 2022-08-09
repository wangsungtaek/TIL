class Person2 {
    name: string;
}

class Customer {
    name: string;
}

const cust: Customer = new Person2();

const cust1: Customer = { name: 'Mary' };
const pers: Person2 = { name: 'John' };