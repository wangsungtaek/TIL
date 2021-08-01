## 함수 호출 방식에 의해 결정되는 this

- 자바스크립트의 함수는 호출될 때, 매개변수로 전달되는 인자값 이외에, arguments 객체와 this를

    암묵적으로 전달 받는다.

~~~ javascript
function square(number){
    console.log(this);
    console.log(arguments);

    return number * number;
}

square(2);
~~~

- 자바스크립트의 경우 java와 같이 this에 바인딩되는 객체는 한가지가 아니라 해당 함수 호출

    방식에 따라 this에 바인딩되는 객체가 달라진다.

<hr >

### 함수 호출 방식과 this 바인딩

- 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게

    호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.


<br >

### 함수 호출 방식 4가지

1. 함수 호출

2. 메소드 호출

3. 생성자 함수 호출

4. apply/call/bind 호출

![image](https://user-images.githubusercontent.com/68735491/127758438-52860076-e874-4954-a4d2-48a62b742a32.png)


<hr >

### 1. 함수 호출

- 전역객체(Global Object)는 모든 객체의 유일한 최상위 객체를 의미한다.

- 일반적으로 Browser-side에서는 window, Server-side(Node.js)에서는 global 객체를 의미한다.

- 전역객체는 전역 스코프를 갖는 전역변수를 프로퍼티로 소유한다.

~~~ javascript
var value = 1;

var obj = {
    value: 100,
    foo: function() {
        setTimeout(funcition(){
            console.log("callback's this: ", this); // window
            console.log("callback's this.value: ", this.value) // 1
        }, 100);
    }
}

obj.foo();
~~~~

- 내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든 관계없이 this는 전역객체를 바인딩한다.

- 설계 단계의 결함으로 내부함수 this가 전역객체를 참조하는 것을 회피방법은 아래와 같다.

~~~ javascript
var value = 1;

var obj = {
    value: 100,
    foo: function(){
        var that = this;

        console.log("foo's this: ", this);  // obj
        console.log("foo's this.value: ", this.value) // 100
        function bar() {
            console.log("bar's this: ", this) // window
            console.log("bar's this.value: ", this.value) // 1

            console.log("bar's that: ", that); // obj
            console.log("bar's that: ", that.value) // 100
        }
        bar();
    }
};

obj.foo();
~~~

<hr >

### 2. 메소드 호출

- 함수가 객체의 프로퍼티 값이면 메소드로서 호출된다. 이때 메소드 내부의 this는 해당 메소드를 소유한 객체,

    즉 해당 메소드를 호출한 객체에 바인딩된다.

~~~ javascript
var obj1 = {
    name: 'Lee',
    sayName: function() {
        console.log(this.name);
    }
}

var obj2 = {
    name: 'Kim'
}

obj2.sayName = obj1.sayName;

obj1.sayName(); // Lee
obj2.sayName(); // Kim
~~~

- 프로토타입 객체도 메소드를 가질 수 있다.

- 프로토타입 객체 메소드 내부에서 사용된 this도 일반 메소드 방식과 마찬가지로 해당 메소드를 호출한 객체에 바인딩된다.

~~~ javascript
function Person(name){
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

var me = new Person('Lee');
console.log(me.getName());

Person.prototype.name = 'Kim';
console.log(Person.prototype.getName());
~~~

<hr >

### 3. 생성자 함수 호출

- 자바스크립트의 생성자 함수는 말 그대로 객체를 생성하는 역할을 한다.

- 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.

- 생성자 함수의 함수명은 첫문자를 대문자로 기술한다.

~~~ javascript
// 생성자 함수
function Person(name){
    this.name = name;
}

var me = new Person('Lee');
console.log(me); // Person {name: "Lee"}

// new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않는다.
var you = Person('Kim');
console.log(you); // undefined
~~~

<br >

#### 3.1 생성자 함수 동작 방식

1. 빈 객체 생성 및 this 바인딩

2. this를 통한 프로퍼티 생성

3. 생성된 객체 반환

<br >

#### 3.2 객체 리터럴 방식과 생성자 함수 방식의 차이

- 객체 리터럴 방식과 생성자 함수 방식의 차이는 프로토타입 객체에 있다.

    - 객체 리터럴 방식의 경우, 생성된 객체의 프로토타입 객체는 Object.prototype
    
    - 생성자 함수 방식의 경우, 생성된 객체의 프로토타입 객체는 Person.prototype

