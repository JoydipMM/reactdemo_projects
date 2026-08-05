const express = require('express'); // import express for create a router
const router = express.Router(); // create a router
const { userRegistrationController } = require('../controllers/user.controller'); // import user registration controller

router.post('/register', userRegistrationController ); // create auth registration route and call user registration controller

module.exports = router; // export this router