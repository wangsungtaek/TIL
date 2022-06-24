# 참조에 의한 객체 복사

- 객체는 '참조에 의해'저장되고 복사된다.

- 변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소'인 객체에 대한 '참조 값'이 저장된다.
    ~~~ javascript
    let user = { name: "John" };

    let admin = user; // 참조값을 복사함
    ~~~
    - 변수는 두 개이지만 각 변수엔 동일 객체에 대한 참조 값이 저장된다.

### 참조에 의한 비교

- 비교 시 피연산자인 두 객체가 동일한 객체인 경우에 참을 반환
    ~~~javascript
    let a = {};
    let b = a; // 참조에 의한 복사

    alert(a == b); // true
    alert(a === b); // true

    let a = {};
    let b = {};

    alert(a == b); //false
    ~~~

## 객체 복사, 병합과 Object.assign

- 기존에 있던 객체와 똑같으면서 독립적인 객체를 만들고 싶다면 아래와 두 가지 방법으로 복사하면 된다.

    1. 프로퍼티를 순회하는 방식
    ~~~ javascript
    let user = {
        name: 'John',
        age: 30
    };

    let clone = {}; // 새로운 빈 객체

    for (let key in user) {
        clone[key] = user[key];
    }

    clone.name = "Pete";

    alert(user.name); // John
    alert(clone.name); // Pete
    ~~~

    2. Object.assign 메서드 사용
    ~~~ javascript
    // 예시 1
    let user = { name: "John" };

    let permissions1 = { canView: true };
    let permissions2 = { canEdit: true };

    // permissions1과 permission2의 프로퍼티를 user로 복사
    Object.assign(user, permissions1, permissions2);

    // 예시 2
    let user = {
        name: "John",
        age: 30
    };

    let clone = Object.assign({}, user);
    ~~~

## 중첩 객체 복사

~~~ javascript
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

alert(user.sizes === clone.sizes); // true, 같은 객체입니다.

// user와 clone은 sizes를 공유한다.
user.sizes.width++;
alert(clone.sizes.width); // 51
~~~


- 중첩되어 있는 객체는 깊은 복사로 복사를 해야한다.

- 깊은 복사 방법은 재귀 함수 또는 lodash 라이브러리를 통해 진행하면 된다.
