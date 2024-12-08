const http = require('http');

const server = http.createServer((req, resp)=>{
    resp.write("This is a simple created server");
    resp.end();
});

server.listen('4300', ()=>{
    console.log("server is running on port: 4300");
});

