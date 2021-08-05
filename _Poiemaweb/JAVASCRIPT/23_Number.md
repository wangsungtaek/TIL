## Number 래퍼 객체

- Number 객체는 원시 타입 number를 다룰 때 유용한 프로퍼티와 메소드를 제공하는 레퍼(wrapper)객체이다.

- 원시 타입 wrapper 객체의 메소드를 사용할 수 있는 이유는 원시 타입으로 프로퍼티나 메소드를 호출할 때

    원시 타입과 연관된 wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 되기 때문이다.

~~~ javascript
var num = 1.5;
console.log(num.toFixed()); // 2
~~~

- 위의 원시 타입을 담고 있는 변수 num이 Number.prototype.toFixed() 메소드를 호출할 수 있는 것은

    변수 num의 값이 일시적으로 wrapper객체로 변환되었기 때문이다.

<hr >

## 1. Number Constructor

~~~ javascipt
var x = 123;
var y = new Number(123);

console.log(x == y); // true
console.log(x === y); // false

console.log(typeof x); // number
console.log(typeof y); // object
~~~

- Number 객체는 Number() 생성자 함수를 통해 생성할 수 있다.

<hr >

## 2. Number Property

- 정적(static) 프로퍼티로 Number 객체를 생성할 필요없이 Number.propertyName의 형태로 사용한다.

<br >

### 2.1 Number.EPSILON

- EPSILON은 javascript에서 표현할 수 있는 가장 작은 수이다. 이는 임의의 수와 그 수보다 큰 수 중

    가장 작은 수와의 차이와 같다.

- 부동소수점의 비교는 Number.EPSILON을 사용하여 비교 가능하다.

~~~ javascript
console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // false!!!

function isEqual(a, b){
  // Math.abs는 절댓값을 반환한다.
  // 즉 a와 b의 차이가 JavaScript에서 표현할 수 있는 가장 작은 수인 Number.EPSILON보다 작으면 같은 수로 인정할 수 있다.
  console.log(Math.abs(a - b));
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));
~~~

<br >

### 2.2 Number.MAX_VALUE

- 자바스크립트에서 사용 가능한 가장 큰 숫자(1.7976931348623157e+308)를 반환한다.

<br >

### 2.3 Number.MIN_VALUE

- 자바스크립트에서 사용 가능한 가장 작은 숫자(5e-324)를 반환한다.

<br >

### 2.4 Number.POSITIVE_INFINITY

- 양의 무한대 Infinity를 반환

<br >

### 2.5 Number.NEGATIVE_INFINITY

- 음의 무한대 -Infinity를 반환

<hr >

## 3. Number Method

### 3.1 Number.isFinite

- 매개변수에 전달된 값이 정상적인 유한수인지를 검사하여 그 결과를 Boolean으로 반환한다.

~~~ javascript
Number.isFinite(testValue);
~~~

<br >

### 3.2 Number.isInteger

- 매개변수에 전달된 값이 정수인지 검사하여 그 결과를 Boolean으로 반환한다.

<br >

### 3.3 Number.isNaN

- 매개변수에 전달된 값이 NaN인지를 검사하여 그 결과를 Boolean으로 반환한다.

<br >

### 3.6 Number.prototype.toFixed

~~~ javascript
var numObj = 12345.6789;

// 소숫점 이하 반올림
console.log(numObj.toFixed());   // '12346'
// 소숫점 이하 1자리수 유효, 나머지 반올림
console.log(numObj.toFixed(1));  // '12345.7'
// 소숫점 이하 2자리수 유효, 나머지 반올림
console.log(numObj.toFixed(2));  // '12345.68'
// 소숫점 이하 3자리수 유효, 나머지 반올림
console.log(numObj.toFixed(3));  // '12345.679'
// 소숫점 이하 6자리수 유효, 나머지 반올림
console.log(numObj.toFixed(6));  // '12345.678900'
~~~

- 매개변수로 지정된 소숫점자리를 반올림하여 문자열로 반환한다.

<br >

### 3.8 Number.prototype.toString

- 숫자를 문자열로 변환하여 반환

~~~ javascript
var count = 10;
console.log(count.toString());   // '10'
console.log((17).toString());    // '17'
console.log(17 .toString());     // '17'
console.log((17.2).toString());  // '17.2'

var x = 16;
console.log(x.toString(2));       // '10000' (2진법)
console.log(x.toString(8));       // '20' (8진법)
console.log(x.toString(16));      // '10' (16진법)

console.log((254).toString(16));  // 'fe'
console.log((-10).toString(2));   // '-1010'
console.log((-0xff).toString(2)); // '-11111111'
~~~

<br >

### 3.9 Number.prototype.valueOf()

- Number 객체의 원시 타입 값을 반환한다.