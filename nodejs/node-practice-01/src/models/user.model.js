const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength:5,
        maxLength:20,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minLength:5,
        maxLength:50,
    },
    password:{
        type: String,
        required: true,
        minLength:5,
        maxLength:70,
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female", "other"],
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100,
    },
    skills: {
        type: [String],
        required: true,
    }
}, {
    timestamps: true
}
);

const User = mongoose.model("User", userSchema);

module.exports = User;