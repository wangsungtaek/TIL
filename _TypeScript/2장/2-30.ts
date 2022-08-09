class Dog {
    constructor(readonly name: string) {}
    sayHello(): string {
        return 'Dog says hello!';
    }
}

class Fish {
    constructor(readonly name: string) {}
    dive(howDeep: number): string {
        return `Diving ${howDeep} feet`;
    }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {

    if(pet instanceof Dog) {
        return pet.sayHello();
    } else {
        return `Fish cannot talk, sorry..`;
    }
}

const dog = new Dog('purpe');
const fish = new Fish('ba-se');

console.log(talkToPet(dog));
console.log(talkToPet(fish));


