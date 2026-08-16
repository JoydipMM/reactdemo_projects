// 01. import winston library
const winston = require('winston');

// 02. create a logger instance with desired configuration
const logger = winston.createLogger({
    // 03. set the logging level based on the environment
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug', // Set the level to the current environment
    format: winston.format.combine(
        winston.format.timestamp(), // Add timestamp to log messages
        winston.format.errors({ stack: true }), // Include stack trace for errors
        winston.format.splat(), // Support string interpolation
        winston.format.json() // Log in JSON format
    ),
    defaultMeta: { service: 'media-service' }, // Add default metadata to log messages
    transports: [
        // 04. add console transport for logging to the console
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(), // Colorize log messages for better readability
                winston.format.simple() // Use simple format for console output
            )
        }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Log errors to a file
        new winston.transports.File({ filename: 'logs/combined.log' }) // Log all messages to a combined log file
    ]
});

module.exports = logger; // Export the logger instance for use in other modules