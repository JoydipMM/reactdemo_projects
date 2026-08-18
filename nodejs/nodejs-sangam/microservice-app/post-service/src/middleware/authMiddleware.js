const logger = require("../utils/logger");

const authenticateRequest = (req, res, next) => {
    logger.info("Authenticating middleware request");
    const userId = req.headers["x-user-id"];// we get the "x-user-id" header from api-gateway

    // check if the user is not authenticated
    if(!userId){
        logger.warn("User not authenticated");
        return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    // add the user id to the request
    req.user = { userId };
    console.log(req.user);
    next();
};

module.exports = { authenticateRequest };