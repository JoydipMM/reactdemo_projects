const logger = require("../utils/logger"); // Import the logger instance for logging errors and other information
const mongoose = require("mongoose");
const User = require("../models/User.model");
const generateToken = require("../utils/generateToken");
const {validateRegistration} = require("../utils/validation"); // Import the validation function for user registration



// user registration controller
const userRegistrationController = async (req, res) => {
    logger.info("User registration endpoint called"); // Log that the user registration controller has been called
    try{


        // validate the data getting from request body to check if it is valid or not with the help of joi schema
        const {error} = validateRegistration(req.body);

        // if there is an error in validation
        if(error){
            logger.warn("Validation error during user registration: " + error.details[0].message); // Log the validation error
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }

        // if validation is successful then we will check if user already exists or not with the help of email and username
        const { username, email, password} = req.body;
        const userExists = await User.findOne({$or: [{email}, {username}]}); // if email or username already exists

        // if user already exists then we will return a response with status code 409 (Conflict) and a message indicating that the user already exists
        if(userExists){
            logger.warn("User already exists with the provided email or username"); // Log that the user already exists
            return res.status(409).json({ // 409 >> use for conflict. because the request is syntactically valid; the resource conflicts with existing data.
                success: false,
                message: "User already exists with the provided email or username"
            });
        }


        // if the user is new then we will create a new user instance and save it to the database
        const newUser = new User({
            username,
            email,
            password
        });
        await newUser.save(); // Save the new user to the database

        logger.info(`new user data ${newUser.username}`);

        const { accessToken, refreshToken } = await generateToken(newUser.username);

        logger.info("User registered successfully: " + newUser._id); // Log the successful registration
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            accessToken,
            refreshToken
        });

    }catch(err){
        logger.error("Error occurred while registering user", {
            error: err?.message,
            stack: err?.stack
        }); // Log any errors that occur
        return res.status(500).json({
            success: false,
            message: "Error occurred while registering user",
            error: process.env.NODE_ENV !== "production" ? err?.message : undefined
        });
    }
}

// user login controller


// refresh token controller


// user logout controller



module.exports = {
    userRegistrationController
}