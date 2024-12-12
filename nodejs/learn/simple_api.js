// const http = require("http");
// http.createServer((req, resp)=>{
//     resp.writeHead(200, { 'content-type' :'application/json' });
//     resp.write(JSON.stringify({ "name": "nodejs", "type": "javascript" }));
//     resp.end();
// }).listen(5000);


// data coming from other file
const http = require("http");
const data = require("./simple_api_data");
http.createServer((req, resp)=>{
    resp.writeHead(200, { 'content-type' :'application/json' });
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);