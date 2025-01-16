const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const router = express.Router();

router.get('/welcome', authMiddleware, adminMiddleware, (req, resp)=>{

    const { id, username, role } = req.userInfo;
    resp.json({
        message: "Welcome to Admin dashboard",
        user: {
            _id: id,
            username,
            role
        }
    })
})

module.exports = router;