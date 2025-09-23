import express from 'express';
//import session from 'express-session';
//import MongoStore from 'connect-mongo';
const app = express();

app.set("view engine", "ejs"); 


app.get("/", (req, res) => {
  res.send(`<h1>Authentication</h1>`);
})


app.listen("3000", ()=>{ console.log("server is runing") })