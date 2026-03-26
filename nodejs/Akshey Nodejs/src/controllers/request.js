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
- check touserid and loggedin user id is same
- check the request status will be "interested" only
- check the status to only accepted, rejected or blocked
- loggedin user can only accept or reject the request
- if receiver blocked the request then the sender user can't send any request to the receiver user again
*/
const receivedRequestController = async (req, res)=>{
    try{
        // this logged in user data is coming from middleware auth
        const loggedUser = req.user;

        // get the request id and status from params
        const {status, requestid} = req.params;

        // make variable of connection type
        const ALLOWED_STATUS = ["accepted", "rejected"];

        // allow only loggedin user to accept or reject the request
        if(!ALLOWED_STATUS.includes(status)){
            return res.status(400).send({message: "Invalid status"});
        }

        console.log(loggedUser._id);

        // validate connection request: we find the connections based on below condition
        /*
        1. is the request id exist
        2. is the "touserid" is same as the logged in user id
        3. is the request status is "interested"
        */
        const connectionRequest = await Connection.findOne({
            _id: requestid, 
            touserid: loggedUser._id,
            status: "interested"
        })
        // if request not found
        if(!connectionRequest){
            throw new Error("Connection request not found");
        }

        connectionRequest.status = status;
        await connectionRequest.save();
        

        res.status(200).send({user:connectionRequest});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}


const getRequestListController = async(req, res)=>{
    try{
        // this logged in user data is coming from middleware auth
        const loggedUser = req.user;

        // get list of connections based on loggedin user id and status is "interested"
        const connections = await Connection.find(
            {touserid: loggedUser._id, status: "interested"}
        ).populate("fromuserid", ["name", "gender"]); 
        // syntax:01 .populate("fromuserid", ["name", "gender"])
        // syntax:02 .populate("fromuserid", "name gender"])
        // syntax: .populate("document id of reference collection based schema", ["visible field name 01", "visible field name 02"]);

        // if connections not found
        if(!connections){
            throw new Error("Connection request not found");
        }

        // if connections found then send the connections
        res.status(200).send({message:"request list", connections: connections});

    }catch(err){
        res.status(500).send({message: err.message});
    }
}


const connectedListController = async(req, res)=>{
    try{
        // this logged in user data is coming from middleware auth
        const loggedUser = req.user;

        const connectionList = await Connection.find({
            fromuserid: loggedUser._id,
            status: "accepted"
        }).populate("touserid", ["name", "gender"]);


        res.status(200).send({message:"Send connection list", user:connectionList});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}


module.exports = {
    sendRequest: sendRequestController,
    receivedRequest: receivedRequestController,
    getRequestList: getRequestListController,
    connectedList: connectedListController
}