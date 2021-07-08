## Node.js file upload example

Javascript의 함수는 일급 객체이다.

다음 조건을 만족하면 일급 객체로 간주한다.

> 1. 무명의 리터럴로 표현이 가능한다.
> 
> 2. 변수나 자료 구조(객체, 배열..)에 저장할 수 있다.
> 
> 3. 함수의 파라미터로 전달 할 수 있다.
> 
> 4. 반환값(return value)으로 사용할 수 있다.

<br >

### index.js
~~~ javascript
// index. js

var server = require("./server2");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
~~~

<br >

### router.js
~~~ javascript
// router.js

function route(handle, pathname, response, request) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
~~~

<br >

### requestHandlers.js
~~~ javascript
// requestHandlers.js

var fs = require("fs"),
    formidalbe = require("formidable");

function start(response) {
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request) {
    console.log("Request handler 'upload' was called.");

    var form = new formidalbe.IncomingForm();
    console.log("about to parse");
    form.parse(request, function (error, fields, files) {
        console.log("parsing done");
        fs.renameSync(files.upload.path, "tmp/test.png");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response) {
    console.log("Request handler 'show' was called.");
    fs.readFile("tmp/test.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}


exports.start = start;
exports.upload = upload;
exports.show = show;
~~~

<br >

### server.js
~~~ javascript
var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
~~~

### 실행결과

![image](https://user-images.githubusercontent.com/68735491/124951291-2c493c00-e04e-11eb-89d8-afe99b6f2f5e.png)

![image](https://user-images.githubusercontent.com/68735491/124951396-471bb080-e04e-11eb-816c-dd060682cf03.png)

