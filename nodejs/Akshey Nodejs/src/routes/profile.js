const express = require("express");
const profileRouter = express.Router();
const { authMiddleware } = require('../middleware/auth.middleware')
const profileController = require('../controllers/profile');

// user profile
profileRouter.get("/", authMiddleware, profileController.profile);

module.exports = profileRouter;