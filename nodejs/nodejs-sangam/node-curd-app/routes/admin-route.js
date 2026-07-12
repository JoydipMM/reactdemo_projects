const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');

router.get('/dashboard', authMiddleware, adminMiddleware, (req, res) => {
    res.json({ title: 'Admin', message: 'Welcome to Admin page', user: req.userInfo });
});

module.exports = router;