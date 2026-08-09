const mongoose = require('mongoose');
const argon2 = require('argon2'); // Import argon2 for password hashing

const userSchema = new mongoose.Schema({
    // firstName: {
    //     type: String,
    //     required: false
    // },
    // lastName: {
    //     type: String,
    //     required: false
    // },
    username: {
        type: String,
        required: false,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});


// Pre-save middleware to hash the password before saving the user document
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    try {
        this.password = await argon2.hash(this.password);
    } catch (error) {
        throw error;
    }
});


// we create a method to comapre password async function to compare the hashed password with the provided password
userSchema.methods.comparePassword = async function (candidatePassword) {
    try{ // if there is no error then this scope help to compare password provided by user with hashed password
        // to verify the password, we use argon2.verify method which takes two arguments: the hashed password and the candidate password
        return argon2.verify(this.password, candidatePassword);
    }catch (error) { // if there is any error
        throw new Error(error);
    }
}


// we create a text index on the username and email fields to enable text search on these fields
userSchema.index({username: "text", email: "text"});


// we create a model named User using the userSchema and export it for use in other parts of the application
const User =  mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;