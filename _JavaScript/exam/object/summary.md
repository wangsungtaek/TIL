# 객체 리터럴

## 객체란 ?

- 객체 타입은 다양한 타입의 값(원시 값 또는 다른 객체)을 하나의 단위로 구성한 복합적인 자료구조

- 객체 타입의 값, 즉 객체는 변경 가능한 값이다.

- 객체는 프로퍼티와 메서드로 구성된 집합체다.

## 객체 리터럴에 의한 객체 생성

~~~ javascript
var person = {
    name: 'Lee',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}`);
    }
}

console.log(typeof person);
console.log(person); // { name: 'Lee', sayHello: f }
~~~

## 프로퍼티

- 프로퍼티 키로 숫자 리터럴을 사용하면 따옴표는 붙지 않지만 내부적으로는 문자열로 변환된다.

~~~ javascript
var foo = {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo); // { 0: 1, 1: 2, 2: 3 }
~~~


## 메서드

- 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라 부른다.

## 프로퍼티 접근

- 마침표 프로퍼티 접근 연산자(.)를 사용하는 마침표 표기법

- 대괄호 프로퍼티 접근 연산자([...])를 사용하는 대괄호 표기법


