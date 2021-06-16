## if와 '?'를 사용한 조건 처리

### if문

~~~javascript
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까?', '');

if(year == 2015) alert('정답입니다.');
~~~

위 예시에선 조건(year == 2015)이 간단한 경우만 다뤘는데, 조건문은 더 복잡할 수도 있다.

~~~javascript
if(year == 2015) {
    alert( "정답입니다!" );
    alert( "아주 똑똑하시네요!" );
}
~~~

<hr >

### 불린형으로의 변환

- 숫자 0, 빈 문자열"", null, undefined, NaN은 불린형으로 변환 시 모두 false가 된다.

- 이런 값들은 'falsy(거짓 같은)' 값이라고 부른다.

~~~javascript
if (0) {
    // 0은 falsy입니다.
}

if (1) {
    // 1은 truthy입니다.
}
~~~

### 'else'절

if문엔 else 절을 붙일 수 있다.

~~~javascript
let year = prompt('ECAMScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if(year == 2015) {
    alert( '정답입니다.' );
} else {
    alert( '오답입니다.' );
}
~~~

### 'else if'로 복수 조건 처리

~~~javascript
let year = prompt('ECAMScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if(year < 2015) {
    alert( '숫자를 좀 더 올려보세요.' );
} else if (year > 2015) {
    alert( '숫자를 좀 더 내려보세요.' );
} else {
    alert( '정답입니다!' );
}
~~~

### 조건부 연산자 '?'

~~~javascript
let accessAllowed;
let age = prompt('나이를 입력해 주세요.', '');

if(age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
alert(accessAllowed);
~~~

- '물음표 연산자'라고도 불리는 '조건부 연산자'를 사용하면 위 예시를 더 짧고 간결하게 변형할 수 있다.

- 피연산자가 세 개이기 때문에 조건부 연산자를 '삼항 연산자'라고 부른다.

~~~javascript
let result = condition ? value1 : value2;
~~~
~~~javascript
let accessAlloewd = (age > 18) ? true : false;
~~~


