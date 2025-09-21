import express from 'express';
const app = express();

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

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send("Something Broken")
    next()
})

app.use((req, res)=>{
    res.send("<h1>404: Page not found</h1>")
})

app.listen("3000", ()=>{ console.log("server is runing") })