const express = require("express");
const app = express();

const postRoute = require("./routes/post.routes");
const errorHandler = require("./middleware/errorHandler");

const logger = require("./utils/logger");
const configureCors = require("./config/corsConfig");
const helmet = require("helmet"); // this this multiple headers for security as a middleware
const  { rateLimit } = require("express-rate-limit"); // this is used to limit the rate of requests from the same IP
const { RedisStore } = require('rate-limit-redis'); // this is used to store the rate limit data in redis
const { RateLimiterRedis } = require("rate-limiter-flexible");
const Redis = require("ioredis");

// create redis cllient
const redisClient = new Redis(process.env.REDIS_URL);

app.use(helmet()); // to secure the Express.js server
//app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies
app.use(configureCors()); // to configure cors
app.use(express.json()); // to parse JSON bodies

// That code is a custom middleware. Its purpose is to log every incoming HTTP request before it reaches your routes.
app.use((req, res, next)=>{
    logger.info(`Received ${req.method} request to ${req.url}`);
    logger.info(`Request body, ${req.body}`);
    next();
})

// create rate limiter and DDOS Protection -> DDOS -> Distributed Denial of Service
const rateLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: "middleware", // unique prefix to help us distinguish between different rate limiters
    points: 10, // 10 requests
    duration: 1, // per 1 second by IP
    blockDuration: 60, // block for 1 minute
})

// use the rate limiter middleware
app.use((req, res, next)=>{
    rateLimiter.consume(req.ip).then(()=>{
        next(); // if the request is not exceeded the rate limit, pass it to the next middleware.
    }).catch((err)=>{
        logger.warn(`Rate limit exceeded for IP: ${req.ip}`);
        res.status(429).json({ success: false, message: "Rate limit exceeded" });
    });
});

// IP based rate limiter --------------------------------
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

// apply endPointRateLimiter middleware to routes
app.use('/api/post/create', endPointRateLimiter);

// add min routes
app.use("/api/post", postRoute);

// use error handler middleware
// first import error handler middleware from middleware/errorHandler.js then use it
app.use(errorHandler);


// unhandled promise rejection
process.on("unhandledRejection", (reason, promise)=>{
    logger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
})


// app.use("*", (req, res)=>{
//     res.status(404).json({ success: false, message: "Route not found" });
// });

module.exports = app;