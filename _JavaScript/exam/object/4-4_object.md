# 메서드와 this

### 메서드 단축 구문

- 일반적인 방법과 단축 구문을 사용한 방법이 완전히 동일하진 않다.

- 객체 상속과 관련된 미묘한 차이가 존재한다.

~~~ javascript
user = {
    sayHi: function() {
        console.log("Hello");
    }
};

user = {
    sayHi() {
        console.log("Hello");
    }
}
~~~

## 메서드와 this

### 자유로운 this

~~~ javascript
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert( this.name );
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // John
admin.f(); // Admin

admin['f'](); // Admin
~~~

## this가 없는 화살표 함수

~~~ javascript
let user = {
    firstName: "보라",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user.sayHi(); // 보라
~~~