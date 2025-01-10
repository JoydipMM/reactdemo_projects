const http = require('http');

const server = http.createServer((req, resp)=>{
    const url = req.url;
    if(url === '/') {
        resp.writeHead(200, {'Content-Type': 'text/plain'});
        resp.end("Home Page");
    }else if (url === '/about'){
        resp.writeHead(200, {'Content-Type': 'text/plain'});
        resp.end("About Page");
    }else{
        resp.writeHead(404, {'Content-Type': 'text/plain'});
        resp.end("Not Found !!");
    }
});

const port = 3000;
server.listen(port, ()=>{ console.log(`port is runing on ${port}`); });