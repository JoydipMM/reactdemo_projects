const express=require('express');
const userRouter=express.Router();
const Connection = require('../models/connection.model');
const User = require('../models/user');
const { authMiddleware } = require('../middleware/auth.middleware')


userRouter.get("/new-connections", authMiddleware, async (req, res) => {
    try {
        const loggedUser = req.user;

        // logged user can not see his own card
        // logged user can see the card of other users whos already connected, send/get request or blocked the logged user


        // find all connection request that i have send/recevied
        const connections = await Connection.find({
            $or:[
                { touserid: loggedUser._id },
                { fromuserid: loggedUser._id }
            ]
        })
        .select("fromuserid touserid status")
        .populate("fromuserid", ["fullname"])
        .populate("touserid", ["fullname"]);
        // .select("fromuserid touserid") ==> helps to filter out which fields to return

        // hide users from feed that already connected with the logged in user
        const hideUsersFromFeed = new Set();
        connections.forEach((request) => {
            hideUsersFromFeed.add(request.fromuserid._id.toString());
            hideUsersFromFeed.add(request.touserid._id.toString());
        })
        //console.log(hideUsersFromFeed);

        const users = await User.find({
            $and:[
                {_id: { $nin: Array.from(hideUsersFromFeed) }}, // not in the array
                {_id: { $ne: loggedUser._id }} // not equal to
            ]
            
        }).select("fullname gender skills age");



        res.status(200).send({message:"user feeds", users:users});
    } catch (error) {
        res.status(500).send({message: err.message});
    }
})

module.exports = userRouter;