## 1. strict mode란 ?

- 잠재적인 오류를 발생시키는 어려운 개발 환경을 만들고 그 환경에서 개발을 하는 것이 좋다.

- 이를 지원하기 위해 ES5부터 strict mode가 추가 되었다.

- ESLint와 같은 도구를 사용하여 strict mode와 유사한 효과를 얻을 수 있다.

- 린트 도구는 정적분석기능을 통해 소스 코드를 실행하기 전에 소스 코드를 스캔하여 문법적 오류만이 아니라

    잠재적 오류까지 찾아내고 오류의 이유를 리포팅해주는 도구이다.
  
<hr >

## 2. strict mode의 적용

~~~ javascript
function foo() {
    'use strict';
    
    x = 10; // x is not defined
}
foo();
~~~

- strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가한다.

<hr >

## 3. 전역에 strict mode를 적용하는 것은 피하자.

- 전역에 적용한 strict mode는 스크립트 단위로 적용된다.

- 전역에 strict mode를 적용하는 것은 바람직하지 않다.

<hr >

## 4. 함수 단위로 strict mode를 적용하는 것도 피하자.

- 모든 함수에 일일이 strict mode를 적용하는 것은 번거로운 일이다.

- 외부 컨텍스트에 strict mode를 적용하지 않는다면 이 또한 문제가 발생한다.

- 따라서 strict mode는 즉시실행함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.

~~~ javascript
(function () {
    // non-strict mode
    var let = 10; // 에러가 발생하지 않는다.

    function foo() {
        'use strict';
    
        let = 20; // error
    }

    foo();
}());
~~~

<hr >

## strict mode가 발생시키느느 에러

### 5.1 암묵적 전역 변수

- 선언하지 않은 변수를 참조하면 ReferenceError가 발생

### 5.2 변수, 함수, 매개변수의 삭제

### 5.3 매개변수 이름의 중복

- 중복된 함수 파라미터 이름을 사용하면 SyntaxError가 발생

### 5.4 with 문의 사용

### 5.4 일반 함수의 this

~~~ javascript
(function() {
    'use strict';
    
    function foo() {
        console.log(this); // undefined
    }
    foo();
    
    function Foo() {
        console.log(this); // Foo
    }
    new Foo();
}());
~~~
