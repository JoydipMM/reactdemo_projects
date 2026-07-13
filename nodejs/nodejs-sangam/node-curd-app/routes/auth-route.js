const express = require('express');
const {registerUser, loginUser, changePasswordUser} = require("../controllers/auth-controller");
const router = express.Router();

const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/change-password", authMiddleware, changePasswordUser)

module.exports = router;