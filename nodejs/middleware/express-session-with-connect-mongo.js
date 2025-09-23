import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
const app = express();

app.set("view engine", "ejs"); 

// Setup express-session middleware
app.use(session({
  secret: 'mySecretKey',    // secret to sign session ID cookie
  resave: false,         // disable session modify
  saveUninitialized: false,    // disable to create session if there have not value in the session 
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours [session validity] 1000 = 1s
  // store: MongoStore.create({ 
  //   mongoUrl: 'mongodb+srv://joydip_db_user:<password>@cluster0.gj2rusk.mongodb.net/node_session_DB',
  //   collectionName: "mysession"
  // }),
}));



app.get("/", (req, res) => {
    if(req.session.username){
      res.send(`<h1>Express Session</h1><h1>Session is: ${req.session.username}</h1>`);
    }else{
      res.send(`<h1>Express Session</h1><h1>No Session found</h1>`);
    }
})

app.get("/set-session", (req, res) => {
  req.session.username = "Node Js"
    res.send("<h1>Session Created</h1>")
})

app.get("/get-session", (req, res) => {
  if(req.session.username){
    res.send(`<h1>Session is: ${req.session.username}</h1>`);
  }else{
    res.send(`<h1>No Session found</h1>`);
  }
})

app.get("/destroy", (req, res) => {
  req.session.destroy((err)=>{
    if(err){
      res.status(500).send("Faild to destroy")
    }
    res.send(`<h1>Session destroy successfully</h1>`);
  })
    
})



app.listen("3000", ()=>{ console.log("server is runing") })