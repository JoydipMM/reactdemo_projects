const express = require("express");
const profileRouter = express.Router();
const { authMiddleware } = require('../middleware/auth.middleware')
const profileController = require('../controllers/profile');

// user profile
profileRouter.get("/view", authMiddleware, profileController.profileView);
profileRouter.patch("/edit", authMiddleware, profileController.profileEdit);

module.exports = profileRouter;