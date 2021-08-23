## Module

- 모듈이란 애플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각을 말한다.

- 모듈은 세부 사항을 캡슐화하고 공개가 필요한 API만을 외부에 노출한다.

- 자바스크립트는 C언어의 #include, Java의 import등 대부분의 프로그래밍 언어의

    모듈 기능이 부족한 부분이 있는 것이 사실이다.

- 자바스크립트를 클라이언트 사이드에 국한하지 않고 범용적으로 사용하고자 하는 움직임이 생기면서

    모듈 기능은 반드시 해결해야하는 핵심 과제가 되었다.

    - 이런 상황에서 제안된 것이 CommonJS와 AMD(Asynchronous Module Definition)이다.

<hr >

## 1. 모듈 스코프

- ES6 모듈은 파일 자체의 스코프를 제공한다. 즉 ES6 모듈은 독자적인 모듈 스코프를 갖는다.

- 모듈 내에서 선언한 변수는 모듈 외부에서 참조할 수 없다. 스코프가 다르기 때문

<hr >

## 2. export 키워드

- 모듈 안에 선언한 식별자를 외부에 공개하여 다른 모듈들이 참조할 수 있게 하고 싶다면 export 키워드를 사용한다.

~~~ javascript
// 변수의 공개
export const pi = Math.PI;

// 함수의 공개
export function square(x) {
    return x * x;
}

// 클래스의 공개
export class Person {
    constructor(name) {
        this.name = name;
    }
}

// 변수, 함수, 클래스를 하나의 객체로 구성하여 공개
export { pi, square, Person };
~~~

<hr >

## 3. import 키워드

- 모듈에서 공개한 대상을 로드하려면 import 키워드를 사용한다.

~~~ javascript
import { pi, square, Person } from './lib.mjs';

console.log(pi);
console.log(square(10));
console.log(new Person('Lee'));
~~~

