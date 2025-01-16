const express = require('express');
const { authLogin, authRegister } = require('../controllers/auth-controllers');

// create routes
const router = express.Router();

// list of routes
router.post('/register', authRegister);
router.post('/login', authLogin);

module.exports = router;
