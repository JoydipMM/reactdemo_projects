const express = require('express');
const app = express();

app.listen("3000", ()=>{ console.log("Server running...") })

app.get("/", (req, res)=>{
    res.send("<h2>Home page | Normal Route</h2>")
})
app.get("/user/profile", (req, res)=>{
    res.send("<h2>User Profile page <br/>Nested Route</h2>")
})
app.get("/user/profile", (req, res)=>{
    res.send(`<h2>User Profile page <br/>Nested Route</h2>`)
})
app.get("/profile/:id", (req, res)=>{
    res.send(req.params)
})
app.get("/user/:userid/book/:bookid", (req, res)=>{
    //res.send(req.params)
    res.send(`User ID: ${req.params.userid}`)
})

app.get("/user/:userid-:bookid", (req, res)=>{
    res.send(req.params)
    //res.send(`User ID: ${req.params.userid}`)
})
app.get("/search", (req, res)=>{
    const name = req.query.name;
    const script = req.query.script;
    //res.send(req.query)
    res.send(`<h2>Name: ${name}<br/>Script: ${script}</h2>`)
})