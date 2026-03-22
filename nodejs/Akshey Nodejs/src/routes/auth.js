const express = require('express');
// es module ===> import { Router } from 'express';
const authController = require('../controllers/auth');
const authRouter = express.Router();

/*
-----------------------------
auth router list
-----------------------------
-POST auth/singup
-POST /auth/login
-POST auth/logout
*/

// signup api
authRouter.post("/signup", authController.signup);
// login api
authRouter.post("/login", authController.login);


module.exports = authRouter;
