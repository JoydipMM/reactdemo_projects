const logger = require('../utils/logger');
const jwt = require('jsonwebtoken');

const validateUserToken = (req, res, next) => {
    logger.info("Authenticating middleware request for post");
    // get the authorization header where the token will be stored
    const authHeader = req.headers['authorization'];

    // get the token from the authorization header
    const token = authHeader && authHeader.split(' ')[1];

    // check if the token is not present
    if(!token){
        logger.warn("Token not present for post");
        return res.status(401).json({ success: false, message: "Authentication required for post" });
    }

    logger.info("Token:", token);

    // verify the token
    const validateToken = jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err){
            logger.warn("Token not valid");
            return res.status(429).json({ success: false, message: "Invalid Access token for post" });
        }

        // if no error at token validation then add the token to the request
        req.token = token;
        next();
    });

}

module.exports = { validateUserToken };