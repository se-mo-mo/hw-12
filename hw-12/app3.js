const http = require('http');

http.createServer(function (request, response) {
    if(request.url === '/' && request.method === 'GET'){
        response.write('hello this is root');
        response.end()
    }else{
        response.write("this is" +" " + request.url)
        response.end()
    }
}).listen(5005);
