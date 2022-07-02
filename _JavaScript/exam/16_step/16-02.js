const person = {
    name: 'Lee'
}

person.age = 20;

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(Object.getOwnPropertyDescriptors(person));