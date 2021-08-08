## String

- String 객체는 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메소드를 제공하는 레퍼 객체이다.

~~~ javascript
const str = 'Hello world!';
console.log(str.toUpperCase()); // 'HELLO WORLD!'
~~~

- 변수 str의 값이 일시적으로 wrapper객체로 변환되기 때문에 String.prototype.toUpperCase()

    메소드를 호출할 수 있다.

<hr >

## 1. String Constructor

- String 객체는 String 생성자 함수를 통해 생성할 수 있다. 이때 전달된 인자는 모두 문자열로 변환된다.

~~~ javascript
const str = 'Lee';
const strObj = new String('Lee');

console.log(str == strObj); //true
console.log(str === strObj); //false

console.log(typeof str); // string
console.log(typeof strObj); // object
~~~

<hr >

## 2. String Property

### 2.1 String.length

- 문자열 내의 문자 갯수를 반환

~~~ javascript
const str = 'Hello';
console.log(str1.length); // 5
~~~

<hr >

## 3. String Method

- String 객체의 모든 메소드는 언제나 새로운 문자열을 반환한다.

    문자열은 변경 불가능한 원시 값이기 때문이다.

### 3.1 String.prototype.charAt()

- 인수로 전달된 Index를 사용하여 index에 해당하는 위치의 문자를 반환한다.

<br >

### 3.2 String.prototype.concat()

- 인수로 전달한 1개 이상의 문자열과 연결하여 새로운 문자열을 반환한다.

- concat 메소드를 사용하는 것보다는 +, += 할당 연산자를 사용하는 것이 성능상 유리하다.

<br >

### 3.3 String.prototype.indexOf()

- 인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 처음 발견된 곳의 index를 반환한다.

<br >

### 3.5 String.prototpye.replace()

- 첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 두번째 인수로 전달한 문자열로 대체한다.

<br >

### 3.6 String.prototype.split()

- 첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 문자열을 구분한 후 분리된 각 문자열로

    이루어진 배열을 반환한다.

<br >

### 3.7 String.prototype.substring()

- 첫번째 인수로 전달한 start 인덱스에 해당하는 문자부터 두번째 인자에 전달된 end 인덱스에 해당하는 문자의

    바로 이전 문자까지를 모두 반환한다.

<br >

### 3.8 String.prototype.slice()

- String.prototype.substring과 동일하다. 단 slice는 음수의 인수를 전달할 수 있다.

<br >

### 3.9 String.prototype.toLowerCase

- 대상 문자열의 모든 문자를 소문자로 변경한다.

<br >

### 3.10 String.prototype.toUpperCase

- 대상 문자열의 모든 문자를 대문자로 변경한다.

<br >

### 3.11 String.prototype.trim()

- 대상 문자열 양쪽 끝에 있는 공백 문자를 제거한 문자열을 반환한다.

<br >

### 3.12 String.prototype.repeat()

- 인수만큼 반복해 새로운 문자열을 반환한다.

<br >

### 3.13 String.prototype.includes

- 인수로 전달된 문자열이 포함되어 있는지를 검사하고 결과를 불리언 값으로 반환한다.