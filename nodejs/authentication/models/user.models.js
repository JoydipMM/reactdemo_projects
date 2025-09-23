import mongoose from "mongoose";

const userSchame = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    userpass:{
        type:String,
        require:true,
    },
}, { timestamps:true });

const User = mongoose.models.User || mongoose.model("User", userSchame);

export default User;