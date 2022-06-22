# 객체

- 다양한 데이터를 담을 수 있다.

- 객체 생성 방법
  ~~~ javascript
  let user = new Object(); // 객체 생성자 문법
  let user = {};           // 객체 리터럴 문법
  ~~~

<br>

## 리터럴과 프로퍼티
<hr>

- 중괄호 {} 안에는 '키: 값'쌍으로 구성된 프로퍼티가 들어간다.
  ~~~ javascript
  let user = {
    name: "John"
    age: 30
  }
  ~~~

- 프로퍼티 추가
  ~~~ javascript
  user.isAdmin = true;
  ~~~

- 프로퍼티 삭제
  ~~~ javascript
  delete user.age;
  ~~~
  
## 대괄호 표기법

  - 여러 단어를 조합해 프로퍼티 키를 만들 경우 사용한다.
  ~~~ javascript
  let user = {};

  // set
  user["likes birds"] = true;

  // get
  alert(user["likes birds"]);

  // delete
  delete user["likes birds"];
  ~~~

  ### 계산된 프로퍼티

  - 객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우
  ~~~ javascript
  let fruit = "apple";

  let bag = {
    [fruit]: 5,
  }

  console.log(bag.apple);
  ~~~

## 단축 프로퍼티

  ~~~ javascript
  function makeUser(name, age) {
    return {
      name, // name: name과 같음
      age,  // age: age와 같음
    }
  }

  let user = makeUser("John", 30);
  console.log(user.name);
  ~~~


## 'in'연산자로 프로퍼티 존재 여부 확인하기

- 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환한다.
  ~~~ javascript
  let user = { name: "John", age: 30 };

  console.log( "age" in user );
  console.log( "blabla" in user );
  ~~~

## for..in 반복문

  ~~~ javascript
  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };

  for (let key in user) {
    console.log(key);       // name, age, isAdmin
    console.log(user[key]); // John, 30, true
  }
  ~~~
  