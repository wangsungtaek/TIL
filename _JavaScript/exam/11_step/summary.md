# 원시 값과 객체의 비교

- 원시 타입의 값, 즉 원시 값은 변경 불가능한 값이다. 이에 비해 객체(참조) 타입의 값, 즉 객체는 변경 가능한 값이다.

- 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 실제 값이 저장된다. 이에 비해 객체를 변수에 할당하면 변수(확보된 메모리 공간)에는 참조 값이 저장된다.

- 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. 이에 비해 객체는 참조값이 복사되어 전달된다.

## 원시 값

### 변경 불가능한 값

- 한번 생성된 원시 값은 읽기 전용값으로서 변경할 수 없다.

- 변수 값을 변경하기 위해 원시 값을 재할당하면 새로운 메모리 공간을 확보하고 재할당한 값을 저장한 후, 변수가 참조하던 메모리 공간의 주소를 변경한다. 값의 이러한 특성을 불변성이라고 한다.

### 문자열과 불변성

- 문자열은 원시값인 동시에 유사 배열 객체이다.

- 원시값이므로 값의 변경은 불가능 하고 재할당을 해야하지만 객체처럼 length, 메서드 등을 사용할 수 있는 유사 배열이다.

### 값에 의한 전달

~~~ javascript
var score = 80;

var copy = score;

console.log(score, copy); // 80 80
console.log(score === copy); // true

// score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
// 따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100;

console.log(score, copy); // 100 100
console.log(score === copy); // true
~~~

- 이처럼 변수에 원시 값을 갖는 변수를 할당하면 할당받는 변수(copy)에는 할당되는 변수(score)의 원시 값이 복사되어 전달된다.

- 이를 값에 의한 전달이라 한다.

- 식별자로 값을 구별해서 식별한다는 것은 식별자가 기억하고 있는 메모리 주소를 통해 메모리 공간에 저장된 값에 접근할 수 있다는 것을 의미한다. 즉, 식별자는 메모리 주소에 붙인 이름이라고 할 수 있다.

## 객체

### 변경 가능한 값

- 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할 수 있다.

- 즉, 재할당 없이 프로퍼티를 동적으로 추가할 수 있고 프로퍼티 값을 갱신할 수도 있으며 프로퍼티 자체를 삭제할 수 있다.

- 객체를 변경할 때마다 원시 값처럼 이전 값을 복사해서 새롭게 생성한다면 명확하고 신뢰성은 확보되겠지만 객체의 크기가 클 수록 비용이 증가한다.

- 메모리를 효율적으로 사용하기 위해, 그리고 객체를 복사해 생성하는 비용을 절약하여 성능을 향상시키기 위해 객체는 변경 가능한 값으로 설계되어 있다.

- 메모리 사용의 효율성과 성능을 위해 어느정도의 구조적인 단점을 감안한 설계라고 할 수 있다.

### 참조에 의한 전달

- 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다. 이를 참조에 의한 전달이라고 한다.

~~~ javascript

var person = {
  name: 'Lee'
};

// 동일한 객체를 참조한다.
var copy = person;

console.log(copy === person); // true

copy.name = 'Kim';

person.address = 'Seoul';

console.log(person); // { name: 'Kim', address: 'Seoul'}
console.log(copy); // { name: 'Kim', address: 'Seoul'}
~~~