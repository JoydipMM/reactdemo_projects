// if we use logger in our project
// import logger instance from utils/logger.js to log errors
const logger = require('../utils/logger');


const errorHandler = (err, req, res, next) => {

    // Check if headers have already been sent
    if (res.headersSent) {
        return next(err);
    }

    // Log the error using the logger instance
    logger.error({
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
        message: err.message,
        stack: err.stack,
    }); // Log the error stack trace

    const statusCode = err.statusCode || 500;
    const isProduction = process.env.NODE_ENV === "production";

    res.status(statusCode).json({
        success: false,
        message: isProduction ? "Internal Server Error" : err.message,
    })

}

module.exports = errorHandler; // Export the errorHandler middleware for use in other modules





