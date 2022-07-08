const obj = {};
const parent = { x: 1 };

console.log(Object.getPrototypeOf(obj)); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(Object.prototype == Object.getPrototypeOf(obj)); // true
Object.setPrototypeOf(obj, parent);
console.log(Object.getPrototypeOf(obj)); // {x: 1}
