const express = require("express");
const connectionRouter = express.Router();
const { authMiddleware } = require('../middleware/auth.middleware')
const connectionController = require('../controllers/connection');




// connection request api
connectionRouter.get("/connection-request", authMiddleware, connectionController.connection);


module.exports = connectionRouter;