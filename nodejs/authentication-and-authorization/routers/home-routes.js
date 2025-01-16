const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.get('/welcome', authMiddleware, (req, resp)=>{

    const { id, username, role } = req.userInfo;
    resp.json({
        message: "Welcome to user dashboard",
        user: {
            _id: id,
            username,
            role
        }
    })
})

module.exports = router;