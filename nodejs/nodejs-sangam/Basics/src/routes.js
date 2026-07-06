const http = require("http");

// create server
const server = http.createServer((req, res) => {

    const url = req.url; // url is a property of request object

    if(url === '/'){
        // '/' >>> http://localhost:4000/
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home page");
    }else if(url === '/about'){
        // '/about' >>> http://localhost:4000/about
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About page");
    }else{
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
})

// create port
const port = 4000;

// server listen on port
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})