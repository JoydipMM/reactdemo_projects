const mongoose = require("mongoose");
const { logger } = require("../utils/logger");
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    logger.info(`MongoDB Connected: ${connection.connection.host}`);
    return connection;
}

module.exports = connectDB;