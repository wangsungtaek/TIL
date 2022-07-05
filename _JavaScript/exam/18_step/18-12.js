const obj = { a: 1 };

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('__proto__')); // false