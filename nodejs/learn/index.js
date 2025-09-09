//const express = require('express'); // old command
// es6 new import command
import express from 'express';
import mongoose from 'mongoose';
import userSchema from './models/user.model';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// db connect
const mongoURL = `${process.env.MONGODBURL}/${process.env.MONGODBNAME}`;
//console.log("Connecting to:", mongoURL);
mongoose.connect(mongoURL)
.then(()=>{ console.log("Database connected") }).catch(err => console.log(err));


// apply ejs middleware
app.set("view engine", "ejs"); 
//app.set("views", "./custom-templates") // use any other folder

app.use(express.urlencoded({ extended:false }))

app.use(express.static("public"))

app.get("/", (req, res) => {
    //res.send("<h2>Home page</h2>")
    // render a html file
    const name = ["Rajesh", "Mohit", "Brijesh", "Sunil"]
    const team = [
        { id: 1, name: "Aisha Khan", role: "UI Designer", location: "Kolkata" },
        { id: 2, name: "Ravi Sharma", role: "Frontend Dev", location: "Bengaluru" },
        { id: 3, name: "Meera Patel", role: "Graphic Designer", location: "Pune" },
        { id: 4, name: "Arjun Singh", role: "UI Designer", location: "Delhi" },
        { id: 5, name: "Neha Verma", role: "Frontend Dev", location: "Hyderabad" },
        { id: 6, name: "Sandeep Roy", role: "Product Designer", location: "Kolkata"}
    ];
    res.render("home", { title:"Dynamic Home Page", message: "Welcome to NodeJS", name:name, teamData:team })
})

app.get("/about", (req, res) => {
    //res.send("<h2>About page</h2>")
    res.render("about")
})

app.get("/works", (req, res) => {
    //res.send("<h2>About page</h2>")
    res.render("project")
})

app.get("/form", (req, res)=>{
    res.render("form", { message:null })
})

app.post("/submit", (req, res)=>{
    const resbody = req.body; // Use For Testing {"myname":"joydip"}
    const name = req.body.myname;
    const msg = `${name} your form submitted`;
    //res.send(msg) // joydip your form submitted

    // now we want to show this message in the form page after submit data
    // then we commentted the above  --- >>> res.send(msg)
    res.render("form", {message:msg})
})

// user routes
app.get("/userlist", (req, res)=>{
    res.render("users/list")
})
app.get("/userview", (req, res)=>{
    res.render("users/view")
})
app.get("/useradd", (req, res)=>{
    res.render("users/add")
})
app.post("/useradd", (req, res)=>{
    res.render("users/add")
})
app.get("/useredit", (req, res)=>{
    res.render("users/edit")
})
app.post("/useredit", (req, res)=>{
    res.render("users/edit")
})
app.get("/userdelete", (req, res)=>{
    res.render("users/delete")
})
app.post("/userdelete", (req, res)=>{
    res.render("users/delete")
})


app.listen("3000", ()=>{ console.log("server is runing") })