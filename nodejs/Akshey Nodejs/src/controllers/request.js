//const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');
const Connection = require('../models/connection.model');

/*
/connection/send/:status/:touserid
status: interested, ignored
//checks:
- the sender user is logged in - done
- the sender/loggedin user cannot send connection request to himself
- check the id of the receiver user is valid or not
- once the sender/loggedin user send connection request to the receiver user then the sender/loggedin user cannot send connection request to the receiver user again
- if request send by the sender/loggedin user to the receiver user then the receiver user can send request to the sender/loggedin user
- restrict the status to only interested or ignored
- check the receiver user exist
*/
const sendRequestController = async (req, res)=>{
    try{
        const user = req.user;
        const cookie = req.cookies;
        const {status, touserid} = req.params;
        const {token} = cookie;
        const decodeToken = await jwt.verify(token, process.env.JWT_SECRETKEY);
        const loggedUserid = decodeToken._id;
        const ALLOWED_STATUS = ["interested", "ignored"];

        // check if the loggedin user is trying to send connection request to himself
        if(loggedUserid === touserid){
            throw new Error("You can't send connection request to yourself");
        }

        // check status
        if(!ALLOWED_STATUS.includes(status)){
            return res.status(400).send({message: "Invalid status"});
        }

        // check id of touserid is valid or not
        const toUser = await userModel.findById(touserid);
        if(!toUser){
            throw new Error("Receiver user not found");
        }

        const exitingConnection = await Connection.findOne({
            $or:[
                {fromuserid: loggedUserid, touserid: touserid},
                {fromuserid: touserid, touserid: loggedUserid}
            ]
            // {fromuserid: loggedUserid, touserid: touserid} // without $or
        });
        if(exitingConnection){
            throw new Error("You have already sent connection request to this user");
        }

        const connection = new Connection({
            fromuserid: loggedUserid,
            touserid: touserid,
            status: status
        });
        await connection.save();
        
        
        res.status(200).send({message:user.name + " send connection request "+ toUser.name +" !!!"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}


/*
/connection/received/:status/:requestid
status: accepted, rejected, unfriend, blocked
// checks:
- the receiver is a loggedin user
- check the requestid exist
- check the status to only accepted, rejected or blocked
- if receiver blocked the request then the sender user can't send any request to the receiver user again
*/
const receivedRequestController = async (req, res)=>{
    try{
        const user = req.user;
        res.status(200).send({message:user.name + " send connection request !!!"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}


module.exports = {
    sendRequest: sendRequestController,
    receivedRequest: receivedRequestController,
}