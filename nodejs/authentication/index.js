//const express = require('express'); // old command
// es6 new import command
import express from 'express';
import mongoose from 'mongoose';
//import User from './models/user.models.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// db connect
// const mongoURL = `${process.env.MONGODBURL}/${process.env.MONGODBNAME}`;
// //console.log("Connecting to:", mongoURL);
// mongoose.connect(mongoURL)
// .then(()=>{ console.log("Database connected") }).catch(err => console.log(err));


// apply ejs middleware
app.set("view engine", "ejs"); 
app.use(express.urlencoded({ extended:false }))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("<h2>Home page</h2>")
})



app.listen("3000", ()=>{ console.log("server is runing") })