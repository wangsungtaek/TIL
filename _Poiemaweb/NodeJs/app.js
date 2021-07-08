// app.js

// http 모듈을 로딩하여 변수 http에 할당.
// 모듈은 자신만의 독립적인 실행 영역(Scope)을 가지게 된다. ==> 전역 변수 중복 문제 발생 x
// 모듈은 require 함수로 임포트, exports 객체를 통해 외부로 공개한다.
const http = require('http');

http.createServer((request, response) => { // HTTP 서버 객체 생성
    response.statusCode = 200;
    response.setHeader('Contnet-Type', 'text/plain');
    response.end('Hello World');
}).listen(3000);
// createServer 메서드가 반환한 HTTP 서버 객체의 listen 메서드에
// 포트번호 3000을 전달하여 서버를 실행한다.

console.log('Server running at http://127.0.0.1:3000/');

