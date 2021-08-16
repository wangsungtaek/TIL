## 1. Ajax

- 자바스크립트를 이용해서 비동기적(Asynchronous)으로 서버와 브라우저가 데이터를

    교환할 수 있는 통식 방식을 의미한다.

<hr >

## 2. JSON (Javascript Object Notation)

- 클라이언트와 서버 간 데이터 교환을 위한 규칙 즉 데이터 포맷을 말한다.

<br >

### 2.1 JSON.stringify

- 객체를 JSON 형식의 문자열로 변환

<br >

### 2.2 JSON.parse

- JSON 데이터를 가진 문자열을 객체로 변환한다.

- JSON 문자열을 객초로서 사용하려면 객체화하여야 하는데 이를 역직렬화라고 한다.

<hr >

## 3. XMLHttpRequest

- Ajax 요청을 생성하고 전송한다.

- 서버가 브라우저의 요청에 대해 응답을 반환하면 같은 XMLHttpRequest 객체가 그 결과를 처리한다.

<br >

### 3.1 Ajax request

~~~ javascript
// XMLHttpRequest 객체의 생성
const xhr = new XMLHttpRequest();
// 비동기 방식으로 Request를 오픈한다.
xhr.open('GET', '/users/');
// Request를 전송한다.
xhr.send():
~~~

<br >

### 3.1.1 XMLHttpRequest.open

~~~ javascript
XMLHttpRequest.open(method, url[, async]);

// method : HTTP method('GET', 'POST', 'PUT', 'DELETE' 등)
// url : 요청을 보낼 URL
// async : 비동기 조작 여부, 옵션으로 default는 true이며 비동기 방식으로 동작한다.
~~~

<br >

### 3.1.2 XMLHttpRequest.send

- 준비된 요청을 서버에 전달한다.

- 기본적으로 서버로 전송하는 데이터는 GET, POST 메소드에 따라 그 전송 방식에 차이가 있다.

    - GET 메소드의 경우, URL의 일부분인 쿼리문자열로 데이터를 서버로 전송한다.

    - POST 메소드의 경우, 데이터(페이로드)를 Request Body에 담아 전송한다.

<br >

### 3.2 Ajax response

- 응답 처리

- XMLHttpRequest.readyState 프로퍼티가 변경될 때마다 콜백함수를 호출한다.

- readXMLHttpRequest.readyState의 값

    - 0 : UNSENT - XMLHttpRequest.open() 메소드 호출 이전

    - 1 : OPENED - XMLHttpRequest.open() 메소드 호출 완료

    - 2 : HEADERS_RESEIVED - XMLHttpRequest.send() 메소드 호출 완료

    - 3 : LOADING - 서버 응답 중

    - 4 : DONE - 서버 응답 완료

<hr >

## 4. Web Server

- 웹서버는 브라우저와 같은 클라이언트로부터 HTTP 요청을 받아들이고 HTML 문서와 같은 웹 페이지를

    반환하는 컴퓨터 프로그램이다.

<hr >

## 5.3 Load JSONP

- 요청에 의해 웹페이지가 전달된 서버와 동일한 도메인의 서버로 부터 전달된 데이터는 문제없이 처리할 수 있다.

    하지만 보안상의 이유로 다른 도메인으로의 요청은 제한된다.

    이것을 동일출처원칙이라고 한다.

- 우회하는 방법 세가지

    1. 웹서버의 프록시 파일
    
        - 서버에 원격 서버로부터 데이터를 수집하는 별도의 기능을 추가하는 것. 이를 프록시라 한다.

    2. JSONP

        - script 태그의 원본 주소에 대한 제약은 존재하지 않는데 이것을 이용하여

            다른 도베인의 서버에서 데이터를 수집하는 방법

    3. Cross-Origin Resource Sharing

        - HTTP 헤더에 추가적으로 정보를 추가하여 브라우저와 서버가 서로 통신해야 한다는 사실을 알게하는 방법이다.

        - Node.js로 구현한 서버의 경우, CORS package를 사용하면 간단하게 Cross-Oring Resource Sharing

            을 구현할 수 있다.

    


