const logger = require('../utils/logger');
const jwt = require('jsonwebtoken');

const validateUserToken = (req, res, next) => {
    logger.info("Authenticating middleware request for post");

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        logger.warn("Token not present for post");
        return res.status(401).json({ success: false, message: "Authentication required for post" });
    }

    logger.info("Token received for validation");

    try {
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET);

        req.token = token;
        req.user = decodedUser;
        return next();
    } catch (err) {
        logger.warn("Token not valid", {
            message: err.message,
            name: err.name
        });
        return res.status(401).json({ success: false, message: "Invalid Access token for post" });
    }
};

module.exports = { validateUserToken };