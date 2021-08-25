## 1. 이터레이션 프로토콜

- 데이터 컬렉션을 순회하기 위한 프로토콜

- 이터레이션 프로토콜에는 이터러블 프로토콜과 이터레이터 프로토콜이 있다.

<br >

### 1.1 이터러블

- 이터러블 프로토콜을 준수한 객체를 이터러블이라 한다.

~~~ javascript
const array = [1, 2, 3];

// 배열은 Symbol.iterator 메소드를 소유한다.
// 따라서 배열은 이터러블 프로토콜을 준수한 이터러블이다.
console.log(Symbol.iterator in array); // true

// 이터러블 프로토콜을 준수한 배열은 for...of 문에서 순회 가능하다.
for (const item of array) {
  console.log(item);
}
~~~

<br >

### 1.2 이터레이터

- 이터레이터 프로토콜은 next 메소드를 소유하며 next 메소드를 호출하면 이터러블을 순회하며

    value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환하는 것이다.

~~~ javascript
// 배열은 이터러블 프로토콜을 준수한 이터러블이다.
const array = [1, 2, 3];

// Symbol.iterator 메소드는 이터레이터를 반환한다.
const iterator = array[Symbol.iterator]();

// 이터레이터 프로토콜을 준수한 이터레이터는 next 메소드를 갖는다.
console.log('next' in iterator); // true

// 이터레이터의 next 메소드를 호출하면 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다.
let iteratorResult = iterator.next();
console.log(iteratorResult); // {value: 1, done: false}
~~~

<hr >

## 4. 이터레이션 프로토콜의 필요성

- 이터레이션 프로토콜은 다양한 데이터 소스가 하나의 순회 방식을 갖도록 규정하여

    데이터 소비자가 효율적으로 다양한 데이터 소스를 사용할 수 있도록 데이터 소비자와
    
    데이터 소스를 연결하는 인터페이스의 역할을 한다.

<hr >

## 5. for..of 문

- for..of 문은 내부적으로 이터레이터의 next 메소드를 호출하여 이터러블을 순회하며 next 메소드가

    반환한 이터레이터 리절트 객체의 value 프로퍼티 값을 for..of 문의 변수에 할당한다.

<hr>

## 6. 커스텀 이터러블

### 6.1 커스텀 이터러블 구현

- 일반 객체는 이터러블이 아니다.

- 일반 객체는 Symbol.iterator 메소드를 소유하지 않는다. 즉, 일반 객체는 이터러블 프로토콜을 준수하지 않으므로

    for..of 문으로 순회할 수 없다.

<br >