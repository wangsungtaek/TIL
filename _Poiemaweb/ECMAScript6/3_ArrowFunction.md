## 1. 화살표 함수

- 화살표 함수는 function 키워드 대신 화살표(=>)를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있다.

<hr >

## 2. 화살표 함수의 호출

- 화살표 함수는 익명 함수로만 사용할 수 있다. 따라서 화살표 함수를 호출하기 우해서는 함수 표현식을 사용한다.

<hr >

## 3. this

- function 키워드로 생성한 일반 함수와 화살표 함수의 가장 큰 차이점은 this이다.

<br >

### 3.1 일반 함수의 this

- 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.


<br >

### 3.2 화살표 함수의 this

- 화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다.

    동적으로 결정되는 일반 함수와는 달리 화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다.

<hr >

## 4. 화살표 함수를 사용해서는 안되는 경우

<br >

### 4.1 메소드

~~~ javascript
// Bad
const person = {
  name: 'Lee',
  sayHi: () => console.log(`Hi ${this.name}`)
};

person.sayHi(); // Hi undefined
~~~

-  호출한 객체를 가리키지 않고 상위 컨택스트인 전역 객체 window를 가리킨다.

<br >

### 4.2 prototype

~~~ javascript
// Bad
const person = {
  name: 'Lee',
};

Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);

person.sayHi(); // Hi undefined
~~~

- 화살표 함수로 정의된 메소드를 prototype에 할당하는 경우도 동일한 문제가 발생한다.

<br >

### 4.3 생성자 함수

- 화살표 함수는 생성자 함수로 사용할 수 없다. prototype 프로퍼티를 가지고 있지 않기 떄문

<br >

### 4.4 addEventListener 함수의 콜백 함수

- addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 상위 컨택스트인 전역 객체 window를 가리킨다.

