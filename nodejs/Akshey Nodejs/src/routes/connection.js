const express = require("express");
const userModel = require('../models/user');
const connectionRouter = express.Router();
const { authMiddleware } = require('../middleware/auth.middleware')




// connection request api
connectionRouter.get("/connection-request", authMiddleware, async (req, res)=>{
    try{
        const user = req.user;
        res.status(200).send({message:user.name + " send connection request !!!"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
});


module.exports = connectionRouter;