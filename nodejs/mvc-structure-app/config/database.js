import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const dbConnect = () =>{
    const mongoURL = `${process.env.MONGODBURL}/${process.env.MONGODBNAME}`;
    //console.log("Connecting to:", mongoURL);
    mongoose.connect(mongoURL).then(()=>{ console.log("Database connected") }).catch(err => console.log(err));
}