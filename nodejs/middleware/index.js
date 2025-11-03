import express from 'express';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.set("view engine", "ejs")

// Use cookie-parser middleware
app.use(cookieParser());
const csrfProtection = csurf({ cookie: true })

// With a secret (for signed cookies)
//app.use(cookieParser("mySecretKey"));

app.set("view engine", "ejs"); 

app.get("/", (req, res) => {
    res.send(`<h1>Cookie Parser</h1>`);
});
app.get("/csrf-form", csrfProtection, (req, res) => {
    res.render(`csrf-form`, { csrfToken: req.csrfToken() });
});
app.post("/csrf", csrfProtection, (req, res) => {
    res.send(req.body);
});


app.listen("3000", ()=>{ console.log("server is runing") })

