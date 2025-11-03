import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique:true,
    },
    useremail:{
        type: String,
        require: true,
        unique:true,
    },
    userpassword:{
        type: String,
        require: true,
    },
    userphone:{
        type: Number,
        require: true,
        unique:true,
    },
    gender:{
        type: String,
        enum: ["Male", "Female"],
        require: true,
    },
    useravater:{
        type:String,
    }

}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;