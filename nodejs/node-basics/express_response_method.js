const express = require('express');
const app = express();

app.use(express.json()) // middle ware for get/send json data
app.use(express.urlencoded({extended:false})) // get form data

app.listen("3000", ()=>{ console.log("Server running...") })


//app.get("/", (req, res)=>{
    //res.send("<h2>Home page | Normal Route</h2>")
    //res.status(201).json({ message: 'User created successfully' });
    //res.end('Custom response data');
//})

app.post("/", (req, res)=>{
    res.send(req.body)
})
app.get("/", (req, res)=>{
    //res.send(req.hostname)
    //res.send(req.ip)
    //res.send(req.method)

})
app.get("/about", (req, res)=>{
    //res.send(req.originalUrl) // http://localhost:3000/about?name=joydip
    //res.send(req.path) //http://localhost:3000/about
    //res.send(req.protocol) // http
    //res.send(req.secure) // https - if not then show false
    res.send(req.route) // {"path":"/about","stack":[{"keys":[],"name":"<anonymous>","slash":false,"matchers":[null],"method":"get"}],"methods":{"get":true}}
})

app.get("/about/:id", (req, res)=>{
    //res.send(req.route) // {"path":"/about/:id","stack":[{"keys":[],"name":"<anonymous>","slash":false,"matchers":[null],"method":"get"}],"methods":{"get":true}}

    /*if(req.accepts('html')){
        res.send("<h2>HTML Content</h2>")
    }else if(req.accepts('json')){
        res.send({ message: "JSON Content"})
    }else if(req.accepts('xml')){
        res.send("<h2>XML Content</h2>")
    }else{
        res.send("Content type not supported")
    }*/

    //res.send(req.headers)
    //res.send(req.headers.host) // http://localhost:3000
    //res.send(req.get("host")) // http://localhost:3000
    //res.send(req.get("Accept")) // text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7

    if(req.is("application/json")){
        res.send("valid json data")
    }else if(req.is("text/html")){
        res.send("HTML Data")
    }else{
        res.status(404).send("unsupported content-type")
    }
})

