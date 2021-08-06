## Math

- Math 객체는 수학 상수와 함수를 위한 프로퍼티와 메소드를 제공하는 빌트인 객체이다.

<br >

## 1. Math Property

### 1.1 Math.PI

- PI 값을 반환한다.

<hr >

## 2.Math Method

### 2.1 Math.abs()

- 인수의 절대값을 반환한다. 절댓값은 반드시 0 또는 양수이어야 한다.

~~~ javascript
Math.abs(-1);   // 1
Math.abs('-1'); // 1
Math.abs('');   // 0
Math.abs([]);   // 0
Math.abs(null); // 0
Math.abs(undefined); // NaN
Math.abs({});   // NaN
Math.abs('string'); // NaN
Math.abs();     // NaN
~~~

<br >

### 2.2 Math.round()

- 인수의 소수점 이하를 반올림한 정수를 반환한다.

~~~ javascript
Math.round(1.4); // 1
Math.round(1.6); // 2
Math.round(-1.4); // -1
Math.round(-1.6); // -2
Math.round(1);  // 1
Math.round();   // NaN
~~~

<br >

### 2.3 Math.ceil()

- 인수의 소수점 이하를 올림한 정수를 반환한다.

~~~ javascript
Math.ceil(1.4); // 2
Math.ceil(1.6); // 2
Math.ceil(-1.4); // -1
Math.ceil(-1.6); // -1
Math.ceil(1); // 1
Math.ceil(); //NaN
~~~

<br >

### 2.4 Math.floor()

- 인수의 소수점 이하를 내림한 정수를 반환한다.

    - 양수인 경우, 소수점 이하를 떼어 버린 다음 정수를 반환한다.
    
    - 음수인 경수, 소수점 이하를 떼어 버린 다음 -1을 한 정수를 반환한다.
    
~~~ javascript
Math.floor(1.9); // 1
Math.floor(9.1); // 9
Math.floor(-1.9); // -2
Math.floor(-9.1); // -10
Math.floor(1); // 1
Math.floor(); // NaN
~~~

<br >

### 2.5 Math.sqrt()

- 인수의 제곱근을 반환한다.

<br >

### 2.6 Math.random()

- 임의의 부동 소수점을 반환한다. 반환된 부동 소수점은 0부터 1미만이다. 즉, 0은 포함되지만 1은 포함되지 않는다.

<br >

### 2.7 Math.pow()

- 첫번째 인수를 밑, 두번째 인수를 지수로하여 거듭제곱을 반환한다.

~~~ javascript
Math.pow(2, 8); // 256
Math.pow(2, -1); // 0.5
Math.pow(2); // NaN
~~~

<br >

### 2.8 Math.max(values:number[])

- 인수 중에서 가장 큰 수를 반환한다.

~~~ javascript
Math.max(1,2,3); // 3

const arr = [1, 2, 3];
const max = Math.max.apply(null, arr); // 3
~~~

<br >

### 2.9 Math.min

- 인수 중에서 가장 작은 수를 반환한다.

~~~ javascript
Math.min(1, 2, 3); // 1
~~~