var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Path name is " + pathname);

    var query = url.parse(request.url, true).query;
    console.log("Request parameter is ", query);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(
        "<h1>Path name is " + pathname + "</h1>" +
        "<h1>Request parameter is " + JSON.stringify(query) + "</h1>");
    response.end();
}).listen(8888);

console.log("Server has started.");
