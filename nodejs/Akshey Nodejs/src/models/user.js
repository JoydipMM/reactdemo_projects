const mongoose = require("mongoose");
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// create mongoose schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 60,
        lowercase: true,
        unique: true, // email should be unique else it will throw error
        trim: true, // remove white space
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error("Invalid email | check from schema lavel validation");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        //required: true,
        default: "male",
        // this custom validator is work if we insert new data, not validate when we update any exiting data
        // we need to enable custom validator in patch route handler to works for update data.
        validate(value) {
            if (!["male", "female", "other"].includes(value)) {
                throw new Error("Invalid gender");
            }
            if(value === ""){
                throw new Error("Gender is required");
            }
        },
        //enum: ["male", "female", "other"]
    },
    skills: {
        type: [String],
        /*validate(value) {
            if (value.length < 2) {
                throw new Error("At least two skills are required");
            }
        }*/
    }
}, {
    timestamps: true
});

userSchema.methods.getJWT = async function(){
    const user = this;
    // this is a instances of this user model
    // example: if we call user.getJWT() and the user is "Ravi", then it will take jwt token form Ravi. 
    // *** Note: And "this" keyword only work in normal function not in arrow function
    const token = await jwt.sign({_id: user._id, email: user.email}, "thisisasecretkey@1990", { expiresIn: "1m" });
    return token;
}

userSchema.methods.matchPassword = async function(passwordInputByUser){
    const user = this;
    const isPasswordMatch = await bcrypt.compare(passwordInputByUser, user.password);
    return isPasswordMatch;
}


// create mongoose model
// syntax: mongoose.model(ModelName, schema) --> Note: Model Name should be singular and start with capital letter
const userModel = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = userModel;