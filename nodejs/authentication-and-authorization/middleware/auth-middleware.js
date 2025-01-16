const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, resp, next) =>{
    console.log("middleware running");

    const authHeader = req.headers['authorization'];
    console.log(authHeader);

    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return resp.status(401).json({
            success: false,
            message: "No token provided"
        })
    }

    // decode token
    try{
        const decordedTokenInfo = jwt.verify(token, process.env.JWT_SECRETE_KEY);
        console.log(decordedTokenInfo);
        req.userInfo = decordedTokenInfo;
        next();

    }catch(error){
        return resp.status(500).json({
            status: false,
            message: "No token provided"
        })
    }

    
}

module.exports = authMiddleware;