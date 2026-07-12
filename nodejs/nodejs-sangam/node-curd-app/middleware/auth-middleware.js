
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"]; // here we manually added the bearer token from postman for now and after that we access the token here
    //console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1];
    //console.log(token);

    // if token not found
    if(!token){
        return res.status(401).json({ success:false, message: "Unauthorized Access. Token not found" });
    }

    // if token found then decode the token and attach to request
    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("auth middleware");
        console.log(decodedToken);
        req.userInfo = decodedToken;
        next();
    }catch(error){
        return res.status(401).json({ success:false, message: "Unauthorized Access. Invalid token" });
    }
    
    
}

module.exports = authMiddleware;