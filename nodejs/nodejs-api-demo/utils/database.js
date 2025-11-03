import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const dbConnect = () =>{
    const mongoURL = `${process.env.MONGODBURL}${process.env.MONGODBNAME}`;
    mongoose.connect(mongoURL)
    .then(()=>{ 
        console.log("Database connected");
    })
    .catch((error)=>{
        console.log("Database connect Problem", error);
    })
}
