import { timeStamp } from "console";
import mongoose from "mongoose";

//1. create schema
const ContactSchema = new mongoose.Schema({
    contactname:{
        type:String,
        require:true,
    },
    contactemail:{
        type:String,
        require:true,
        unique:true,
    },
    contactmessage:{
        type:String,
        require:true,
    },
    contactstatus:{
        type:String,
        default: "pending"
    },
}, {timestamps:true})

// 2. create and export model
const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
export default Contact;