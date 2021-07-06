// server.js

// Node.js에 기본 내장되어 있는 http 모듈을 로드한다.
var http = require("http");


function start() {
// callback function
    function onRequest(request, response){
        console.log("Request received.");
        response.writeHead(200, {"Contetn-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

// (1) 요청이 올 때마다 response.writeHead()함수를 사용해서 HTTP status 200과 content-type을 응답 헤더로 보낸다.

// (2) reponse.write()로 HTTP 응답 바디에 "Hello World"텍스트를 담아 보낸다.

// (3) 마지막으로 response.end()로 응답을 마무리한다.
