require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const proxy = require('express-http-proxy');
const logger = require('./utils/logger');
const Redis = require('ioredis');
const { rateLimit } = require('express-rate-limit');
const { RedisStore } = require('rate-limit-redis');

const errorHandlerMiddleware = require('./middleware/errorHandler');

const PORT = process.env.PORT || 3000;

const app = express();
const redisClient = new Redis(process.env.REDIS_URL);


app.use(cors());
app.use(helmet());
app.use(express.json());


// That code is a custom middleware. Its purpose is to log every incoming HTTP request before it reaches your routes.
app.use((req, res, next)=>{
    logger.info(`Received ${req.method} request to ${req.url}`);
    logger.info(`Request body, ${req.body}`);
    next();
})


// create express route endpoint rate limiter middleware
// For create this first import express-rate-limit
const endPointRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (req, res, next) => {
        logger.warn(`endpoint rate limit exceeded for IP: ${req.ip}`);
        res.status(429).json({ success: false, message: "Too many requests" });
    },
    // Redis store configuration
    // for this config we need to import rate-limit-redis
    store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args),
    }), // we are using redis so we need to store the rate limit data in redis
});
app.use(endPointRateLimiter);



/*
Our auth register service is runing on http://localhost:3001/api/auth/register
Our api gateway is running on http://localhost:3000
with proxy endpoint we can proxy the requests to the auth service form http://localhost:3001/api/auth/register to http://localhost:3000/api/auth/register
*/

const proxyOptions = {
    proxyReqPathResolver: (req) => {
        return req.originalUrl.replace(/^\/v1/, '/api');
    },

    proxyErrorHandler: (err, res, next) => {
        // logger.error(`Proxy error: ${err.message}`);
        logger.error('Proxy error', {
            message: err.message,
            code: err.code,
            stack: err.stack
        });

        res.status(500).json({
            success: false,
            message:
                process.env.NODE_ENV !== "production"
                    ? err.message
                    : "Internal Server Error"
        });
    }
};

app.use(
    '/v1/auth',
    proxy(process.env.AUTH_SERVICE_URL, {
        ...proxyOptions,

        proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
            proxyReqOpts.headers['content-type'] = 'application/json';
            return proxyReqOpts;
        },

        userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
            logger.info(
                `Proxy response received from auth service: ${proxyResData.toString()}`
            );

            return proxyResData;
        }
    })
);

app.use(errorHandlerMiddleware);


app.listen(PORT, () => {
    logger.info(`API Gateway started on port ${PORT}`);
    //logger.info(`Auth Service started on port ${process.env.AUTH_SERVICE_URL}`);
    //logger.info(`Redis URL ${process.env.REDIS_URL}`);
});