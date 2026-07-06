const http = require("http");
const fs = require("fs");
const path = require("path");

// create server
const server = http.createServer((req, res) => {
    // request / req >>> will give some properties like: params, body, headers, payload etc
    // response / res >>> will give some response back. 
    console.log("Request received", req);

    // define the response content type
    res.writeHead(200, { "Content-Type": "text/plain" });
    // send the response
    res.end("server is running");
})

// create port
const port = 4000;

// server listen on port
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})