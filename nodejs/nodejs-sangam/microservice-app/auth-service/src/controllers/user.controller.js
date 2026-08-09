const logger = require("../utils/logger"); // Import the logger instance for logging errors and other information
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Token = require("../models/RefreshToken.model");
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

        const { accessToken, refreshToken } = await generateToken(newUser);

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
const userLoginController = async (req, res) =>{
    logger.info("User login endpoint called");

    // get the username, email and password from the request body
    const { username, email, password } = req.body;

    // find and validate the username or email for the user in the database
    const user = await User.findOne({$or: [{username}, {email}]});
    // if user not found
    if(!user){
        logger.error(`User not found with username`);
        return res.status(404).json({
            success: false,
            message: "Invalid username, email or password"
        });
    }

    // if user found then check password
    const isCorrectPassword = await user.comparePassword(password);
    // if password is not correct
    if(!isCorrectPassword){
        logger.error(`User not found with password`);
        return res.status(404).json({
            success: false,
            message: "Invalid username, email or password"
        });
    }

    // if password correct then generate tokens
    const { accessToken, refreshToken } = await generateToken(user);

    logger.info("User logged in successfully");
    return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        accessToken,
        refreshToken
    });
}


// refresh token controller
const crypto = require("crypto");

const userTokenController = async (req, res) => {
    logger.info("User token endpoint called");

    try {
        // 01. Get refresh token from client
        const { refreshToken } = req.body;

        if (!refreshToken) {
            logger.warn("Refresh token missing");

            return res.status(400).json({
                success: false,
                message: "Refresh token missing"
            });
        }

        // 02. Hash incoming refresh token
        const hashedRefreshToken = crypto.createHash("sha256").update(refreshToken).digest("hex");

        // 03. Find hashed token in database
        const savedToken = await Token.findOne({
            token: hashedRefreshToken
        });

        // 04. Token doesn't exist
        if (!savedToken) {
            logger.warn("Invalid refresh token");

            return res.status(401).json({
                success: false,
                message: "Invalid refresh token"
            });
        }

        // 05. Check expiration
        if (savedToken.expiresAt < new Date()) {
            logger.warn("Refresh token expired");

            // remove expired token
            await Token.deleteOne({
                _id: savedToken._id
            });

            return res.status(401).json({
                success: false,
                message: "Refresh token expired"
            });
        }

        // 06. Find the user related to the refresh token
        const user = await User.findById(savedToken.user);

        if (!user) {
            logger.warn("User belonging to refresh token not found");

            return res.status(401).json({
                success: false,
                message: "Invalid refresh token user"
            });
        }

        // 07. Delete old refresh token
        await Token.deleteOne({
            _id: savedToken._id
        });

        // 08. Generate new access + refresh tokens
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await generateToken(user);

        logger.info("Token refreshed successfully");

        // 09. Return new tokens
        return res.status(200).json({
            success: true,
            message: "Token refreshed successfully",
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        });

    } catch (err) {
        logger.error("Error occurred while refreshing token", {
            error: err?.message,
            stack: err?.stack
        });

        return res.status(500).json({
            success: false,
            message: "Error occurred while refreshing token",
            error:
                process.env.NODE_ENV === "production"? "Token API failed" : err?.message
        });
    }
};


// user logout controller



module.exports = {
    userRegistrationController,
    userLoginController,
    userTokenController
}