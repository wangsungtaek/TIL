# 프로토타입

- 자바스크립트는 프로토타입 기반의 객체지향 프로그래밍 언어이다.

- 자바스크립트를 이루고 있는 거의 "모든 것"이 객체다. ( 함수, 배열, 정규 표현식 등 )

<br>

## 객체지향 프로그램
<hr>

- 명령형 프로그래밍의 절차지향적 관점에서 벗어나 여러 개의 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그램 패러다임

- 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조이다.

<br>

## 상속과 프로토타입
<hr>

- 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것

- 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.

    ~~~ javascript
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function() {
        return Math.PI * this.radius ** 2;
    }
    const circle1 = new Circle(1);
    const circle2 = new Circle(2);
    console.log(circle1.getArea == circle2.getArea); // true
    ~~~

<br>

## 프로토타입 객체
<hr>

- 객체지향 프로그래밍의 근간을 이루는 객체 간 상속을 구현하기 위해 사용된다.

- 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가진다. (null인 경우도 있음)

- [[Prototype]]에 저장되는 프로토타입은 객체 생성 방식에 의해 결정된다.

- 객체가 생성될때 객체 생성 방식에 따라 프로토타입이 결정되고 [[Prototype]]에 저장된다.

<br>

### __proto__접근자 프로퍼티

- 모든 객체는 __proto__접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.

<br>

### 1. __proto__는 접근자 프로퍼티다.

- [[Prototype]] 내부 슬롯에도 직접 접근할 수 없으며 __proto__접근자 프로퍼티를 통해 간접적으로 접근할 수 있다.

    ~~~ javascript
    Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
    //{enumerable: false, configurable: true, get: ƒ, set: ƒ}
    ~~~

<br>

### 2. __proto__접근자 프로퍼티는 상속을 통해 사용된다.

- __proto__접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype의 프로퍼티다.

- 모든 객체는 상속을 통해 Object.prototype.__proto__접근자 프로퍼티를 사용할 수 있다.

~~~ javascript
const person = { name: 'Lee' }
// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__')); // false
~~~

<br>

### 3. __proto__접근자 프로퍼티를 통해 프로토타입에 접근하는 이유

- 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해

<br>

### 4. __proto__접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.

- __proto__접근자 프로퍼티 대신 프로토타입의 참조를 취득하고 싶은 경우에는 Object.getPrototypeOf 메서드를 사용

- 프로토타입을 교체하고 싶은 경우 Object.setPrototypeOf 메서드를 사용할 것을 권장

~~~ javascript
const obj = {};
const parent = { x: 1 };

Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, parent);

console.log(obj.x);
~~~

<br>

### 함수 객체의 prototype 프로퍼티

- prototype 프로퍼티는 함수 객체만 소유한다.

    ~~~ javascript
    (function () {}).hasOwnProperty('prototype'); // true
    ~~~

- 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.

- 따라서 생성자 함수로서 호출할 수 없는 함수는 prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.

    - non-constructor ( 화살표 함수와 ES6 메서드 축약 표현 )


