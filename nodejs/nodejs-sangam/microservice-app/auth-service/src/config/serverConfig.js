const app = require("../app");
const logger = require("../utils/logger");
const connectDB = require("../database/mongodb");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try{
        await connectDB();

        const server = app.listen(PORT, () => {
            logger.info(`Server started on port ${PORT}`);
        });

        server.on("error", (err) => {
            logger.error(err);
        });

    }catch(err){
        logger.error(err.message);
        process.exit(1);
    }
}

module.exports = startServer;