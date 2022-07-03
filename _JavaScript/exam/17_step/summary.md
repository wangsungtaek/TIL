# 생성자 함수에 의한 객체 생성

<br>

## Object 생성자 함수
<hr>

- 생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다.

## 생성자 함수
<hr>

### 1. 객체 리터럴에 의한 객체 생성 방식의 문제점

- 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.

- 동일한 프로퍼티를 갖는 개체를 여러 개 생성해야 하는 경우 비효율적이다.

<br>

### 2. 생성자 함수에 의한 객체 생성 방식의 장점

- 생성자 함수에 의한 객체 생성 방식은 마치 객체(인스턴스)를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

- 일반 함수와 동일한 방법으로 생성자 함수를 정의하고 new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.

<br>

### 3. 생성자 함수의 인스턴스 생성 과정

- 자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.

<br>

1. 인스턴스 생성과 this 바인딩

    ~~~javascript
    function Circle(radius) {
        // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
        console.log(this);

        this.radius = radius;
        this.getDiameter = funtion() {
            return 2 * radius;
        }
    }
    ~~~

<br>

2. 인스턴스 초기화

    ~~~javascript
    function Circle(radius) {
        // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
        console.log(this);

        // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
        this.radius = radius;
        this.getDiameter = funtion() {
            return 2 * radius;
        }
    }
    ~~~

<br>

3. 인스턴스 반환

    ~~~javascript
    function Circle(radius) {
        // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
        console.log(this);

        // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
        this.radius = radius;
        this.getDiameter = funtion() {
            return 2 * radius;
        }

        // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    }

    // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
    const circle = new Circle(1);
    ~~~

<br>

### 내부 메서드 [[CALL]]과 [[Construct]]

- 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론, 함수로서 동작하기 위해 함수 객체만을 위한 [[Environment]], [[FormalParameters]] 등의 내부 슬롯과
[[Call]], [[Construct]] 같은 내부 메서드를 추가로 가지고 있다.

- 함수가 일반 함수로서 호출되면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[Construct]]가 호출된다.

- 함수 객체는 callable이면서 constructor 이거나

- callable이면서 non-constructor이다.

<br>

### constructor와 non-constructor의 구분

- constructor: 함수 선언문, 함수 표현식, 클래스

- non-constructor: 메서드(ES6 메서드 축약 표현), 화살표 함수

<br>

### new 연산자

- new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다.

<br>

### new.target

- new.target은 this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용되며 메타 프로퍼티라고 부른다.