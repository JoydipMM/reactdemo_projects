import express from 'express';
const app = express();


app.use(express.json()); // built-in middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // public folder


app.post('/data', (req, res) => {
    res.send(req.body); // now we can access JSON data directly
});

app.post('/form', (req, res) => {
  res.send(req.body); // { username: 'John', age: '25' }
});
// apply ejs middleware
app.set("view engine", "ejs"); 


app.get("/", (req, res) => {
    res.render("home")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/works", (req, res) => {
    res.render("project")
})

app.listen("3000", ()=>{ console.log("server is runing") })