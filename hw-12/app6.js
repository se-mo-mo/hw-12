const http = require('http');
const fs = require('fs')

http.createServer(function (request, response) {

    if(request.url === '/' && request.method === 'GET'){
        response.setHeader('Content-Type', 'text/html');

        fs.readFile('./public/htmlPart8.html', 'utf8', (err, data) =>{
            if(err) throw err;
            response.write(data);
            response.end();
        })
    }}).listen(5005)
