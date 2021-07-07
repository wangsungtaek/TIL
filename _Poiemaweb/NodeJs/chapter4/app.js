// app.js

//
const http = require('http'); // 1
//
const circle = require('./circle');
const myCircle = circle(4);
//
const value = require('./primitive');
//
// const add = require('./foo');
// const result = add(1, 2);
//
const calc = require('./foo');
//
const result1 = calc.add(1, 2);
const result2 = calc.minus(1, 2);
//
const myModule = require('../module');
const result = myModule.calc.add(1, 2);


http.createServer((request, response) => { // 2
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
}).listen(3000); // 3

console.log('Server running at http://127.0.0.1:3000/');

console.log(`지름이 4인 원의 면적: ${myCircle.area()}`);
console.log(`지름이 4인 원의 둘레: ${myCircle.circumference()}`);

console.log(value);

// console.log(result);

console.log(result1);
console.log(result2);

console.log(result);
myModule.print.sayHello();
