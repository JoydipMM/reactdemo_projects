const logger = require('../utils/logger');

const errorHandlerMiddleware = (err, req, res, next) => {

    // Check if headers have already been sent
    if(res.headersSent){
        return next(err);
    }

    // logger error
    logger.error({
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
        message: err.message,
        stack: err.stack
    });

    const statusCode = err.statusCode || 500;
    const isProduction = process.env.NODE_ENV === "production";

    // send error response
    res.status(statusCode).json({
        success: false,
        message: isProduction ? "Internal Server Error" : err.message
    })
    
}

module.exports = errorHandlerMiddleware;