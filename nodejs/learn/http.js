const http = require("http");

const server = http.createServer((req, resp)=>{
    //console.log("req:", req);
    resp.writeHead('200', {'Content-Type': 'text/plain'});
    resp.end("Response send");
});

const port = 3000;
server.listen(port, ()=>{ console.log(`port is runing on ${port}`); });


