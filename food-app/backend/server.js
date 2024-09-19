import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodroute.js";

// app config
const app = express();
const port = 4000;

// middleware [communicate between backend and Database]
app.use(express.json()); // 
app.use(cors()); // access backend from any frontend

// db connection
connectDB();

// api endpoint for foodRouter
app.use("/api/food", foodRouter);

// create route
// get() is a http method which can use for request data from server
app.get("/", (req, res) =>{
    res.send("API working"); // get response from api end point
}); 

// run the express server
// `` -> this is called "Template Literals"
app.listen(port, ()=>{
    console.log(`Server is runing on port - http://localhost:${port}`)
});