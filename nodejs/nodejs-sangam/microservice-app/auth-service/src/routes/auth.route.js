const express = require('express'); // import express for create a router
const router = express.Router(); // create a router
const { userRegistrationController, userLoginController } = require('../controllers/user.controller'); // import user registration controller

router.post('/register', userRegistrationController ); // create auth registration route and call user registration controller
router.post('/login', userLoginController ); // create auth login route and call user login controller

module.exports = router; // export this router