# 함수와 일급 객체

<br>

## 일급 객체

<hr>

- 다음과 같은 조건을 만족하는 객체를 일급 객체라 한다.

  1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.

  2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.

  3. 함수의 매개변수에 전달할 수 있다.

  4. 함수의 반환값으로 사용할 수 있다.

~~~ javascript
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
}

// 2. 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease }

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
  let num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // 1
console.log(decreaser()); // 2
~~~

- 일반 객체는 호출할 수 없지만 함수 객체는 호출할 수 있다.

- 함수 객체는 일반 객체에는 없는 함수 고유의 프로퍼티를 소유한다.

<br>

## 함수 객체의 프로퍼티

<hr>

- arguments, caller, length, name, prototype 프로퍼티는 모두 함수 객체의 데이터 프로퍼티다.

- __proto__는 Object.prototype 객체의 접근자 프로퍼티이다.

<br>

### arguments 프로퍼티

- 함수 객체의 arguments 프로퍼티 값은 arguments 객체다.

- arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다.

- arguments 객체는 배열 형태로 인자 정보를 담고 있지만 실제 배열이 아닌 유사 배열 객체다.

- 유사 배열 객체란 length 프로퍼티를 가진 객체로 for 문으로 순회할 수 있는 객체를 말한다.

<br>

### length 프로퍼티

- 함수 객체의 length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

<br>

### name 프로퍼티

- 함수 객체의 name 프로퍼티는 함수 이름을 나타낸다.

<br>

### __proto__접근자 프로퍼티

- [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다.
