import express from 'express';
const app = express();
const router = express.Router();

// apply ejs middleware
app.set("view engine", "ejs"); 
app.use(express.urlencoded({ extended:false }))
app.use(express.static("public"))

// create custom Name Function for Application Lavel Middleware
const customMiddleware = (req, res, next)=>{
    console.log("Custom Name Function - Application Level middleware");
    next() // Pass control
}
const customSecondMiddleware = (req, res, next)=>{
    console.log("Custom Second Name Function - Application Level middleware");
    next() // Pass control
}


app.get("/", (req, res) => {
    res.render("home")
})

app.get("/about", customMiddleware,customSecondMiddleware, (req, res) => {
    res.render("about")
})

app.get("/works", (req, res) => {
    res.render("project")
})

app.listen("3000", ()=>{ console.log("server is runing") })