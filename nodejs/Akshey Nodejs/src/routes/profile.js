const express = require("express");
const profileRouter = express.Router();
const { authMiddleware } = require('../middleware/auth.middleware')
const userModel = require('../models/user');



// user profile
profileRouter.get("/", authMiddleware, async (req, res)=>{
    try{
        const user = req.user;
        res.status(200).send({message:"user profile page", user: user});
    }catch(err){
        res.status(500).send({message: err.message});
    }
});

module.exports = profileRouter;