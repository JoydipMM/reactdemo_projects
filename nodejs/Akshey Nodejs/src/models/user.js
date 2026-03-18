const mongoose = require("mongoose");

// create mongoose schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


// create mongoose model
// syntax: mongoose.model(ModelName, schema) --> Note: Model Name should be singular and start with capital letter
const userModel = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = userModel;