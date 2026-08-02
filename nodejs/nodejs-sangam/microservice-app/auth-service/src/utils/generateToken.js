const jwt = require("jsonwebtoken");
const logger = require("./logger");
const crypto = require("crypto");
const RefreshToken = require("../models/RefreshToken.model");

const generateToken = async (user) => {
    const accessToken = jwt.sign(
        { userId: user._id, username: user.username }, 
        process.env.JWT_SECRET, 
        { expiresIn: "15m" }
    );
    //return accessToken;

    // create a refresh token and store it in the database for future use
    const refreshToken = crypto.randomBytes(40).toString("hex"); // Generate a random refresh token

    // Set the expiration date to 7 days from now will expire the refresh token in 7 days
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); 

    // Create a new RefreshToken document and save it to the database
    await RefreshToken.create({
        token: refreshToken,
        user: user._id,
        expiresAt: expiresAt
    });

    return { accessToken, refreshToken };
}

module.exports = generateToken;