const http = require("http");

http.createServer((request, response) => {
    const path = request.url;
    const method = request.method;

    console.log('object')

    if (path.includes("/abc") && method === "GET") {
        response.write("you have reached the / abc condpoint")
        response.end()
    }else{
        response.write("Hello world")
        response.end();
    }
}).listen(3000);

console.log("server statrrt on 3000 port")