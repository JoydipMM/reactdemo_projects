import express from 'express';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import session from 'express-session';
import User from './models/user.models.js';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// db connect
const mongoURL = `${process.env.MONGODBURL}/${process.env.MONGODBNAME}`;
//console.log("Connecting to:", mongoURL);
mongoose.connect(mongoURL).then(()=>{ console.log("Database connected") }).catch(err => console.log(err));


// apply ejs middleware
app.set("view engine", "ejs"); 
app.use(express.urlencoded({ extended:false }))
app.use(express.static("public"))

app.use(session({
    secret: 'userAuth',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: mongoURL,
        collectionName:"sessions"
    })
}))

app.get("/", (req, res) => {
    if(req.session.user){
        return res.render("home", {user:req.session.user})
    }
    res.render("home",{user:null})
})

app.get("/register", (req, res) => {
    if(req.session.user){
        return res.redirect("/dashboard")
    }
    res.render("register")
})

app.post("/register", async (req, res) => {
    const { usertitle, useremail, username, userpass } = req.body;
    // hash method is a async funtion that work with promise, So we need to use async and await.
    // hash( variable[target value], salt[encrypt strangth - mostly used 10, how much we increase the value enscryption strangth will increase and process time will increase which take more time] )
    const hashpassword = await bcrypt.hash(userpass, 10)
    //res.send({usertitle, username, userpass:hashpassword})

    // for save data in database
    try {
        const newUser = await User.insertOne({
            name: usertitle,
            username: username,
            email: useremail,
            userpass: hashpassword,
        })
        if(!newUser){
            res.status(404).send("Unable to Save the new user")
        }
        res.redirect("/login")
    } catch (error) {
        res.status(500).send("error >>> ", error)
    }
})

app.get("/login", (req, res) => {
    if(req.session.user){
        return res.redirect("/dashboard")
    }
    res.render("login", {message:null})
})

app.post("/login", async (req, res) => {
    const { useremail, userpass } = req.body;
    //res.render("login")

    // find user email first
    try {
        const getuser = await User.findOne({email:useremail});
        if(!getuser){
            return res.render("login", {message:"User email not found"})
        }
        const isMatch = await bcrypt.compare(userpass, getuser.userpass);
        if(!isMatch){
            return res.render("login", {message:"password not match"})
        }
        req.session.user = getuser.email;
        req.session.message = "Successfully logged in"
        if(req.session.user){
            return res.redirect("/dashboard")
        }
        return res.render("login")
    } catch (error) {
        res.status(500).send("error >>> ", error)
    }

})

app.get("/dashboard", (req, res) => {
    if(req.session.user){
        return res.render("dashboard", {user:req.session.user})
    }
    return res.redirect("/login")
})

app.get("/logout", (req, res) => {
    req.session.destroy(()=>{
        res.redirect("/login")
    })
})



app.listen("3000", ()=>{ console.log("server is runing") })