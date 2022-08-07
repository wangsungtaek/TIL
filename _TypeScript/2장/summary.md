# 기본 타입꽈 커스텀 타입

## 변수 타입 선언
<hr>

- 소프트웨어 개발자는 타입스크립트 컴파일러로 타입을 명시적 또는 암시적으로 선언할 수 있다.

    명시적이란 코드에 직접 구체적으로 표현한다는 뜻이며,

    암시적은 코드로 표현하지 않아도 컴파일러가 알아서 처리한다는 의미

- null을 명시적으로 작성해주면 코드 가독성이 향상된다.

    ~~~ javascript
        function getName(): string | null {
            ...
        }
    ~~~

- 타입스크립트 컴파일러가 유추 가능한 곳에 명시적으로 타입을 추가하는 것을 피해야 한다.

    ~~~ javascript
    const age = 25; // 상수 age의 타입이 없습니다.
    function getTax(income: number): number {
        return income * 0.5;
    }

    let yourTax = getTax(50000); // 변수 yourTax의 타입은 없습니다.
    ~~~

- --strictNullCheck 옵션은 undefined 값을 잡는 데도 도움이 된다.

<br>

## 함수 본문 내 타입 선언
<hr>

- 타입스크립트 함수와 함수 표현식은 자바스크립트와 유사하지만 파라미터 타입과 반환 값을 명시적으로 선언한다.

<br>

## 유티온 타입
<hr>

- 유니온은 OR 연산자처럼 변수에 지정할 수 있는 타입이 여러 개일 경우 사용한다.

    ~~~ javascript
        let padding: string | number
    ~~~
