
//require('dotenv').config({ path: '.env' }) // common js import type
import dotenv from "dotenv"; // module type import
import connectDB from "./db/index.js";
//dotenv.config(); // no need to change any things in package.json
dotenv.config({
    path: './env'
}); // with this code we need to update in package.json below part> 
// "dev": "nodemon src/index.js" 
// change to 
// "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"




connectDB();











/* Basic Mongo DB connection code 
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express();

// IIFE function [ immidiate run function ]
;( async () =>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error)=>{
        console.log("MONGODB CONNECTION ERROR", error);
        throw error
    })

    app.listen( process.env.PORT ,()=>{
        console.log(`Node app is running on port: ${process.env.PORT}`);
    })

  } catch (error) {
    console.error("ERROR", error);
    throw error
  }  
})()

*/