const mongoose = require("mongoose");

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
        trim: true // remove white space
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
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


// create mongoose model
// syntax: mongoose.model(ModelName, schema) --> Note: Model Name should be singular and start with capital letter
const userModel = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = userModel;