import express from 'express';
const app = express();
const expressRouter = express.Router();

// apply ejs middleware
app.set("view engine", "ejs"); 
app.use(express.urlencoded({ extended:false }))
app.use(express.static("public"))

// create custom Router Lavel Middleware
expressRouter.use((req, res, next)=>{
    console.log("Router Level middleware");
    next() // Pass control
})

expressRouter.get("/", (req, res) => {
    res.render("home")
})

expressRouter.get("/about", (req, res) => {
    res.render("about")
})

app.get("/works", (req, res) => {
    res.render("project")
})

app.use("/test", expressRouter)

app.listen("3000", ()=>{ console.log("server is runing") })