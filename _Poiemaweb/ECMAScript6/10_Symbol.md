## 1. Symbol이란?

- 7번째 타입으로 변경 불가능한 원시 타입의 값이다.

- 심볼은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용한다.

<hr >

## 2. Symbol의 생성

- Symbol()함수로 생성한다.

~~~ javascript
// 심볼 mySymbol은 이름의 충돌 위험이 없는 유일한 프로퍼티 키
let mySymbol = Symbol();

console.log(mySymbol); // Symbol()
console.log(typeof mySymbol); // symbol
~~~

<hr >

## 3. Symbol의 사용

- 객체의 프로퍼티 키는 빈 문자열을 포함하는 모든 문자열로 만들 수 있다.

- Symbol 값도 객체의 프로퍼티 키로 사용할 수 있다. Symbol 값은 유일한 값이므로 Symbol 값을 키로 갖는

    프로퍼티는 다른 어떠한 프로퍼티와도 충돌하지 않는다.

~~~ javascript
const obj = {};

const mySymbol = Symbol('mySymbol');
obj[mySymbol] = 123;

console.log(obj); // { [Symbol(mySymbol)]: 123 }
console.log(obj[mySymbol]); // 123
~~~