import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    }
});

module.exports = mongoose.models("User") || mongoose.model("User", userSchema);