## 클래스

- 자바스크립트는 프로토타입 기반 객체지향 언어이다. 비록 다른 객체지향 언어들과의 차이점에

    대한 논쟁이 있긴 하지만, 자바스크립트는 강력한 객체지향 프로그래밍 능력을 지니고 있다.

<hr >

## 1. 클래스 정의 (Class Definition)

- ES6 클래스는 class 키워드를 사용하여 정의한다.

~~~ javascript
// 클래스 선언문
class Person {

    // constructor(생성자)
    constructor(name) {
        this._name = name;
    }

    sayHi() {
        console.log(`Hi ${this._name}`);
    }
}

// 인스턴스 생성
const me = new Person('Lee');
me.sayHi(); // Hi! Lee

console.log(me instanceof Person); // true
~~~

<hr >

## 2. 인스턴스 생성

- 마치 생성자 함수와 같이 new 연산자와 함께 클래스 이름을 호출하면 클래스의 인스턴스가 생성된다.

<hr >

## 3. constructor

- 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 특수한 메소드이다.

> 클래스 필드
> 클래스 내부의 캡슐화된 변수를 말한다. 데이터 멤버 또는 멤버 변수라고도 부른다.

<hr >

## 4. 클래스 필드

- 클래스 몸체(class body)에는 메소드만 선언할 수 있다. 클래스 바디에 클래스 필드를 선언하면

    문법 에러가 발생한다.

- 클래스 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다.

~~~ javascript
class Foo {
    constructor(name = '') {
        this.name = name; // 클래스 필드의 선언과 초기화
    }
}
const foo = new Foo('Lee');
console.log(foo); // Foo { name: 'Lee' }
~~~

<hr >

## 5. Class field declarations proposal

~~~ javascript
class Foo {
    x = 1;          // Field declaration
    #p = 0;         // Private field
    static y = 20;  // Static public field
    static #sp = 30;// Static private field

    bar() {
        this.#p = 10;
        return this.#p;
    }
}

const foo = new Foo();
console.log(foo);
console.log(foo.x);
console.log(Foo.y);
console.log(foo.bar());
~~~

<hr >

## 6. getter, setter

### 6.1 getter

- getter는 클래스 필드에 접근할 때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다.

~~~ javascript
class Foo {
    constructor(arr = []) {
        this._arr = arr;
    }

    get firstElem() {
        return this._arr.length ? this.arr[0] : null;
    }
}

const foo = new Foo([1, 2]);
console.lg(foo.firstElem); // 1
~~~

<br >

### 6.2 setter

- setter는 클래스 필드에 값을 할당할 때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다.

~~~ javascript
class Foo {
    constructor(arr = []) {
        this._arr = arr;
    }

    get firstElem() {
        return this._arr.length ? this._arr[0] : null;
    }

    set firstElem(elem) {
        this._arr = [elem, ...this._arr];
    }
}

const foo = new Foo([1, 2]);

foo.firstElem = 100;

console.log(foo.firstElem); // 100
~~~

<hr >

## 7. 정적 메소드

- 클래스의 정적 메소드를 정의할 때 static키워드를 사용한다.

- 정적 메소드는 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.

~~~ javascript
class Foo {
    constructor(prop) {
        this.prop = prop;
    }

    static staticMethod() {
        return 'staticMethod'
    }
}

console.log(Foo.staticMethod());
~~~

- 클래스의 정적 메소드는 인스턴스로 호출할 수 없다.

<hr >

## 8. 클래스 상속

- 클래스 상속은 코드 재사용 관점에서 매우 유용하다.

<br >

### 8.1 extends 키워드

- extends 키워드는 부모 클래스를 상속받는 자식 클래스를 정의할 때 사용한다.

<br >

### 8.2 super 키워드

- super 키워드는 부모 클래스를 참조할 때 또는 부모 클래스의 constructor를 호출할 때 사용한다.

