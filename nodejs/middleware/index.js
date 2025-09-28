import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
const app = express();


// Use cookie-parser middleware
//app.use(cookieParser());

// With a secret (for signed cookies)
app.use(cookieParser("mySecretKey"));

app.set("view engine", "ejs"); 

app.get("/", (req, res) => {
    res.send(`<h1>Cookie Parser</h1>`);
})

app.get('/set-cookie', (req, res) => {
 //res.cookie('username', 'John'); // set a cookie
 res.cookie("username", "john123", { 
  signed: false,
  maxAge: 1000 * 60 * 60 * 24, // (optional)
  httpOnly:true, // (optional)
  secure:false, // (optional)
  sameSite:true, // (optional)
 });
 res.send('Cookie has been set!');
});

app.get('/get-cookie', (req, res) => {
 // read cookies from request
 const username = req.cookies.username; // normal cookie
 //const username = req.signedCookies.username; // signed cookie
 res.send(`Cookie value: ${username}`);
});

app.get('/clear-cookie', (req, res) => {
 res.clearCookie('username'); // delete cookie
 res.send('Cookie cleared');
});




app.listen("3000", ()=>{ console.log("server is runing") })

