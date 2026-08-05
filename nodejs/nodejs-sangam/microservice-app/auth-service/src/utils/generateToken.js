const jwt = require("jsonwebtoken");
const logger = require("./logger");
const crypto , { randomUUID } = require("crypto");
const RefreshToken = require("../models/RefreshToken.model");

const generateToken = async (user) => {
    const accessToken = jwt.sign(
        { jti: randomUUID(), userId: user._id, username: user.username }, // get user id and username from user document from mongodb
        process.env.JWT_SECRET, // add secret key
        { expiresIn: process.env.JWT_ACCESS_EXPIRE } // set token expiration time
    );
    logger.info("Access token created");

    // create a refresh token and store it in the database for future use
    const refreshToken = crypto.randomBytes(40).toString("hex"); // Generate a random refresh token

    // Hash the refresh token for security. Because, If our database is compromised, every refresh token can immediately be used by an attacker.
    const hashedRefreshToken = crypto.createHash("sha256").update(refreshToken).digest("hex");

    // Set the expiration date to 7 days from now will expire the refresh token in 7 days
    const expiresAt = new Date();
    const refreshTokenExpireDay = Number(process.env.REFRESH_TOKEN_EXPIRE_DAYS);
    expiresAt.setDate(expiresAt.getDate() + refreshTokenExpireDay); // refresh token will expire in 7 days
    /*
    why not ---------------------------------------------
    expiresAt.getDate() + Number(process.env.REFRESH_TOKEN_EXPIRE_DAYS) -> 25 + "7"
    day will be -> "257"
    why this ---------------------------------------------
    expiresAt.getDate() + Number(process.env.REFRESH_TOKEN_EXPIRE_DAYS) -> 25 + 7
    day will be -> 32
    */

    // before create a new refresh token, we need to handle database errors. If database is down, then we will get an error message. So we wrap the code in a try-catch block
    try{
        // Create a new RefreshToken document and save it to the database
        await RefreshToken.create({
            token: hashedRefreshToken, // here we store the hashed refresh token
            user: user._id,
            expiresAt: expiresAt
        });
        logger.info("Refresh token created");
    }catch(err){
        logger.error("Error creating refresh token: ", {
            error: err.message,
            stack: err.stack
        });
        throw new Error("Failed to generate refresh token");
    }

    return { accessToken, refreshToken };
}

module.exports = generateToken;