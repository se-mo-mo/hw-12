const http = require('http');

http.createServer(function (request, response) {
    if(request.url === '/' && request.method === 'GET'){
    response.setHeader('Content-Type', 'text/html');
    response.write('Hello World')
    response.end()
    }
}).listen(5005)
console.log('server started on 5005 ...');