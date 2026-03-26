const express = require("express");
const requestRouter = express.Router();
const { authMiddleware } = require('../middleware/auth.middleware')
const requestController = require('../controllers/request');

/*
/connection/send/:status/:touserid
status: interested, ignored
//checks:
- the sender user is logged in
- the sender/loggedin user cannot send connection request to himself
- once the sender/loggedin user send connection request to the receiver user then the sender/loggedin user cannot send connection request to the receiver user again
- if request send by the sender/loggedin user to the receiver user then the receiver user can send request to the sender/loggedin user
- restrict the status to only interested or ignored
- check the receiver user exist
*/

// connection send request api
requestRouter.post("/send/:status/:touserid", authMiddleware, requestController.sendRequest);



/*
/connection/received/:status/:requestid
status: accepted, rejected, unfriend, blocked
// checks:
- the receiver is a loggedin user
- check the requestid exist
- check the status to only accepted, rejected or blocked
- if receiver blocked the request then the sender user can't send any request to the receiver user again
*/

// connection received request api
requestRouter.post("/received/:status/:requestid", authMiddleware, requestController.receivedRequest);


// this is the list of logged user get request 
requestRouter.get("/request-list", authMiddleware, requestController.getRequestList);


module.exports = requestRouter;