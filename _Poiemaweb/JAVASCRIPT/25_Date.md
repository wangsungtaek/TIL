## Date

- Date 객체는 날짜와 시간을 위한 메소드를 제공하는 빌트인 객체이면서 생성자 함수이다.

## 1. Date Constructor

- Date 객체는 생성자 함수이다. Date 생성자 함수는 날짜와 시간을 가지는 인스턴스를 생성한다.

<br >

### 1.1 new Date()

- 인수를 전달하지 않으면 현재 날짜와 시간을 가지는 인스턴스를 반환한다.

~~~ javascript
const date = new Date();
console.log(date);
~~~

<br >

### 1.2 new Date(milliseconds)

- 인수로 숫자 타입의 밀리초를 전달하면 1970년 1월 1일을 기점으로 인수로 전달된 밀리초만큼 경과한

    날짜와 시간을 가지는 인스턴스를 반환한다.

~~~ javascript
let date = new Date(0);
console.log(date);

// 86400000ms는 1day를 의미한다.
// 1s = 1,000ms
// 1m = 60s * 1,000ms = 60,000ms
// 1h = 60m * 60,000ms = 3,600,000ms
// 1d = 24h * 3,600,000ms = 86,400,000ms
date = new Date(86400000);
console.log(date); // FFri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)
~~~

<br >

### 1.3 new Date(dateString)

- 인수로 날짜와 시간을 나타내는 문자열을 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다.

- 인수로 전달한 문자열은 Date.parse 메소드에 의해 해석 가능한 형식이어야 한다.

~~~ javascript
let date = new Date('May 16, 2019 17:22:10');
console.log(date); // Thu May 16 2019 17:22:10 GMT+0900 (한국 표준시)

date = new Date('2019/05/16/17:22:10');
console.log(date); // Thu May 16 2019 17:22:10 GMT+0900 (한국 표준시)
~~~

<br >

### 1.4 new Date(year, month[, day, hour, minute, second, millisecond])

- 인수로 년, 월, 일, 시, 분 초 밀리초를 의미하는 숫자를 전달하면 지정된 날짜와 시간을 가지는

    인스턴스를 반환한다.

<br >

### 1.5 Date 생성자 함수를 new 연산자없이 호출

- Date 생성자 함수를 new 연산자없이 호출하면 인스턴스를 반환하지 않고 결과값을 문자열로 반환한다.

<hr >

## 2. Date 메소드

### 2.1 Date.now

- 1970년 1월 1일을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.

~~~ javascript
const now = Date.now();
console.log(now);
~~~

### 2.2 Date.parse

- 1970년 1월 1일을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.

<br >

### 2.3 Date.UTC

- 1970년 1월 1일을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.

- new Date(year, month[, day, hour, minte, second, millisecond])와 같은 형식으로

    인수를 사용해야 한다.

<br >

### 2.4 Date.prototype.getFullYear

- 년도를 나타내는 4자리 숫자를 반환

~~~ javascript
const today = new Date();
const year = today.getFullYear();

console.log(today); // Thu May 16 2019 17:39:30 GMT+0900 (한국 표준시)
console.log(year);  // 2019
~~~

<br >

### 2.5 Date.prototype.setFullYear

- 년도를 나타내는 4자리 숫자를 설정한다.

<br >

### 2.6 Date.prototype.getMonth

- 월을 나타내는 0 ~ 11의 정수를 반환 1월은 0, 12월은 11이다.

<br >

### 2.7 Date.prototype.setMonth

- 월을 나타내는 0 ~ 11의 정수를 설정한다.

<br >

### 2.8 Date.prototype.getDate

- 날짜(1 ~ 31)를 나타내는 정수를 반환한다.

~~~ javascript
const today = new Date();
const date = today.getDate();

console.log(today); // Fri Aug 06 2021 20:23:49 GMT+0900 (한국 표준시)
console.log(date);  // 6
~~~

<br >

### 2.9 Date.prototype.setDate

- 날짜(1 ~ 31)를 나타내는 정수를 설정한다.

<br >

### 2.10 Date.prototype.getDay

- 요일(0 ~ 6)를 나타내는 정수를 반환한다.

<br >

### 2.11 Date.prototype.getHours

- 시간(0 ~ 23)를 나타내는 정수를 반환한다.

<br >

### 2.12 Date.prototype.setHours

- 시간(0 ~ 23)를 나타내는 정수를 설정한다.

<br >

### 2.13 Date.prototype.getMinutes

- 분(0 ~ 59)를 나타내는 정수를 반환한다.

<br >

### 2.14 Date.prototype.setMinutes

- 분(0 ~ 59)를 나타내는 정수를 설정한다.

<br >

### 2.15 Date.prototype.getSeconds

- 초(0 ~ 59)를 나타내는 정수를 반환한다.

<br >

### 2.16 Date.prototype.setSeconds

- 초(0 ~ 59)를 나타내는 정수를 설정한다.

<br >

### 2.17 Date.prototype.getMilliseconds

- 밀리초(0 ~ 999)를 나타내는 정수를 반환한다.

<br >

### 2.18 Date.prototype.setMilliseconds

- 밀리초(0 ~ 999)를 나타내는 정수를 설정한다.

<br >

### 2.19 Date.prototype.getTime

- 1970년 1월1일 기점으로 현재 시간까지 경과된 밀리초를 반환한다.

<br >

### 2.20 Date.prototype.setTime

- 1970년 1월1일 기점으로 현재 시간까지 경과된 밀리초를 설정한다.



