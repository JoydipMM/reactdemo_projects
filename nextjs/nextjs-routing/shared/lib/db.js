import mongoose from "mongoose";
import { CONSTANT } from "@/shared/constant/constant";


export async function connectDB(){
    try{
        // await mongoose.connect("mongodb+srv://username:pass@cluster0.gihfe1e.mongodb.net/nextjs-note-app");
        const connection = await mongoose.connect(`${CONSTANT.MONGODB_CONNECTION_STRING}`);
        //console.log(connection.STATES);
        console.log("Database connected....");
    }catch(err){
        throw new Error(err);
    }
}