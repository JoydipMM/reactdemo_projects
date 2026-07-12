const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        minLength: [5, "First name must be at least 2 characters long"],
        maxLength: [20, "First name must be at most 20 characters long"]
    },
    lastname: {
        type: String,
        trim: true,
        minLength: [5, "First name must be at least 2 characters long"],
        maxLength: [20, "First name must be at most 20 characters long"]
    },
    phone: {
        type: String,
        trim: true,
        unique: true,
        match: [/^(\+\d{1,3}[- ]?)?\d{10}$/, "Please enter a valid phone number"]
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: [5, "Username must be at least 5 characters long"],
        maxLength: [20, "Username must be at most 20 characters long"],
        match: [/^(?=.*[@_])[A-Za-z0-9_@]{5,20}$/, "Username must be alphanumeric and contain at least 5 characters and at most 20 characters long and contain at least one of the following special characters: @, _"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/,"Please enter a valid email address"]
    },
    password: {
        type: String,
        required: true,
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#_])[A-Za-z\d@#_]{5,20}$/, "Password must be alphanumeric and contain at least 5 characters and at most 20 characters long and contain at least one of the following special characters: @, #, _"],
        /*
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#_])[A-Za-z\d@#_]{8,20}$/
        This enforces: ---------
        8–20 characters
        1 uppercase
        1 lowercase
        1 digit
        1 special character (@, #, _)
        */
        validate: {
            validator: function (value){
                return value !== this.username
            },
            message: "Password must be different from username"
        }
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
}, {timestamps: true})


userSchema.pre("save", async function(next){
    // if password is not modified
    if(!this.isModified("password")){
        return next();
    }

    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }catch(error){
        next(error);
    }
});


module.exports = mongoose.models.Users || mongoose.model("Users", userSchema);
/* Note:
1. model name always plural and first letter capital.
2. schema name always singular 
3. collection name always plural and all in small letter
*/