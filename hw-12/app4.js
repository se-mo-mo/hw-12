const http = require('http');

http.createServer(function (request, response) {
    if(request.url === '/' && request.method === 'GET'){
        response.write("hello web application");
        response.end()

    }else if(request.url === '/about' && request.method === 'GET'){
        response.write("about me");
        response.end()

    }else if(request.url === '/home' && request.method === 'GET'){
        response.write("this is home");
        response.end()

    }else if(request.url === '/panel' && request.method === 'GET'){
        response.write("this is panel");
        response.end()

    }else if(request.url === '/contact' && request.method === 'GET'){
        response.write("contact us this way");
        response.end()

    }else{
        response.write("bad request");
        response.end()
    }
}).listen(5005)