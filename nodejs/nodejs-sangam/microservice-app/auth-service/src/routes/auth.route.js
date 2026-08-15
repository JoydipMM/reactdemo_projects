const express = require('express'); // import express for create a router
const router = express.Router(); // create a router
const { userRegistrationController, userLoginController, userTokenController, userLogoutController } = require('../controllers/user.controller'); // import user registration controller

router.post('/register', userRegistrationController ); // create auth registration route and call user registration controller
router.post('/login', userLoginController ); // create auth login route and call user login controller
router.post('/token', userTokenController ); // create auth token route and call user token controller
router.post('/logout', userLogoutController ); // create auth logout route and call user logout controller

module.exports = router; // export this router