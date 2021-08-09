## Array

- 배열은 1개의 변수에 여러 개의 값을 순차적을 저장할 때 사용한다.

## 1. 배열의 생성

### 1.1 배열 리터럴

- 0개 이상의 값을 쉼표로 구분하여 대괄호[]로 묶는다.

- 객체 리터럴과의 근본적 차이는 배열 리터럴의 프로토타입 객체는 Array.prototype

    객체 리터럴 obj의 프로토타입 객체는 Object.prototype이다.

- 대부분의 프로그래밍 언어에서 배열의 요소들은 모두 같은 데이터 타입이어야 하지만,

    자바스크립트의 배열은 어떤 데이터 타입의 조합이라도 포함할 수 있다.

<br >

### 1.2 Array() 생성자 함수

- 배열 리터럴 방식도 결국 내장 함수 Array() 생성자 함수로 배열을 생성하는 것을 단순화시킨 것이다.

~~~ javascript
const arr = new Array(1, 2, 3);
console.log(arr); // [1, 2, 3]
~~~

<hr >

## 2. 배열 요소의 추가와 삭제

### 2.1 배열 요소의 추가

~~~ javascript
const arr = [];
console.log(arr[0]) // undefined

arr[1] = 1;
arr[3] = 3;

console.log(arr); // (4) [empty, 1, empty, 3]
console.log(arr.length); // 4
~~~

<br >

### 2.2 배열 요소의 삭제

- 배열은 객체이기 때문에 배열의 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다.

    이때 length에는 변함이 없다.

    해당 요소를 완전히 삭제하여 length에도 반영되게 하기 위해서는 Array.prototype.splice 메소드를 사용한다.

<hr >

## 3. 배열의 순회

- 객체의 프로퍼티를 순회할 때 for..in 문을 사용한다.

- 배열을 순회할때 for in문을 사용하면 불필요한 프로퍼티까지 출력될 수 있고 요소들의 순서를

    보장하지 않으므로 배열을 순회하는데 forEach 메소드, for 문, for..of 문을 사용하는 것이 좋다.

~~~ javascript
const arr = [0, 1, 2, 3];
arr.foo = 10;

for (const key in arr) {
  console.log('key: ' + key, 'value: ' + arr[key]);
}
// key: 0 value: 0
// key: 1 value: 1
// key: 2 value: 2
// key: 3 value: 3
// key: foo value: 10 => 불필요한 프로퍼티까지 출력

arr.forEach((item, index) => console.log(index, item));

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

for (const item of arr) {
  console.log(item);
}
~~~

<hr >

## 4. Array Property

### 4.1 Array.length

- 요소의 개수를 나타낸다.

<hr >

## 5. Array Method

### 5.1 Array.isArray()

- 정적 메소드 Array.isArray는 주어진 인수가 배열이면 true, 배열이 아니면 false를 반환한다.

<br >

### 5.2 Array.from

- 유사 배열 객체 또는 이터러블 객체를 변환하여 새로운 배열을 생성

~~~ javascript
const arr1 = Array.from('Hello');
console.log(arr1); // [ 'H', 'e', 'l', 'l', 'o']
~~~

<br >

### 5.3 Array.of

- 전달된 인수를 요소로 갖는 배열을 생성한다.

~~~ javascript
const arr1 = Array.of(1);
console.log(arr1); // // [1]

const arr2 = Array.of(1, 2, 3);
console.log(arr2); // [1, 2, 3]

const arr3 = Array.of('string');
console.log(arr3); // 'string'
~~~

<br >

### 5.4 Array.prototype.indexOf()

- 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.

<br >

### 5.5 Array.prototype.concat()

- 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환

<br >

### 5.6 Array.prototype.join()

- 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 값, 즉 구분자로 연결한 문자열을 반환한다.

~~~ javascript
const arr = [1, 2, 3, 4];

let result = arr.join();
console.log(result); // '1,2,3,4';

result = arr.join('');
console.log(result); // '1234'

result = arr.join(':');
console.log(result); // '1:2:3:4'
~~~

<br >

### 5.7 Array.prototype.push()

- 인수로 전달받은 모든 값을 원본 배열의 마지막에 요소로 추가하고 변경된 length 값을 반환한다.

~~~ javascript
const arr = [1, 2];

let result = arr.push(3, 4);
console.log(result); // 4

console.log(arr); // [1, 2, 3, 4]
~~~

<br >

### 5.8 Array.prototype.pop()

- 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.

<br >

### 5.9 Array.prototype.reverse()

- 배열 요소의 순서를 반대로 변경한다. 이때 원본 배열이 변경된다.

<br >

### 5.10 Array.prototype.shift()

- 배열에서 첫요소를 제거하고 제거한 요소를 반환한다.

<br >

### 5.11 Array.prototype.slice()

- 인자로 지정된 배열의 부분을 복사하여 반환한다.

~~~ javascript
const items = ['a', 'b', 'c'];

let res = items.slice(0, 1);
console.log(res);  // [ 'a' ]

res = items.slice(1, 2);
console.log(res);  // [ 'b' ]

res = items.slice(1);
console.log(res);  // [ 'b', 'c' ]

res = items.slice(-1);
console.log(res);  // [ 'c' ]

res = items.slice(-2);
console.log(res);  // [ 'b', 'c' ]

res = items.slice();
console.log(res);  // [ 'a', 'b', 'c' ]

// 원본은 변경되지 않는다.
console.log(items); // [ 'a', 'b', 'c' ]
~~~