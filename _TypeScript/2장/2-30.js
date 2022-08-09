var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sayHello = function () {
        return 'Dog says hello!';
    };
    return Dog;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.dive = function (howDeep) {
        return "Diving ".concat(howDeep, " feet");
    };
    return Fish;
}());
function talkToPet(pet) {
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else {
        return "Fish cannot talk, sorry..";
    }
}
var dog = new Dog('purpe');
var fish = new Fish('ba-se');
console.log(talkToPet(dog));
console.log(talkToPet(fish));
