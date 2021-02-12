const http = require('http');
const fs = require('fs')

http.createServer(function (request, response) {
    if(request.url === '/' && request.method === 'GET'){

    response.setHeader('Content-Type', 'text/html');
    response.write("<a href = '/test'>click for showing json file</a>")
    response.end()
    
    }else if (request.url === '/test' && request.method === 'GET'){
        response.setHeader('Content-Type', 'text/html');
        fs.readFile('./public/json.json', 'utf8', (err, data) =>{
            if(err) throw err;
            response.write(data);
            response.end();
    })

}else{
    response.write("bad request");
    response.end()
}
}).listen(5005)
console.log('server started on 5005 ...');