// npm i express-rate-limit

const ratelimit = require("express-rate-limit");

const customRateLimitMiddleware = (maxRequest, time) => {
    return ratelimit({
        windowMs: time,
        limit: maxRequest,

        message: {
            success: false,
            message: "Too many requests. Please try again later."
        },

        standardHeaders: true,
        legacyHeaders: false,

        handler: (req, res) => {
            res.status(429).json({
                success: false,
                message: "Too many requests. Please try again later."
            });
        }
    })
}

module.exports = customRateLimitMiddleware