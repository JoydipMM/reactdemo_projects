import jwt from "jsonwebtoken";
// import User from "../models/user.model";

export const authMiddleware = async (req, res, next) => {
    try {
        // The server sends the token to the client attached in the header which is known as "bearerHeader".
        const bearerHeader = req.headers['authorization'];

        // if in header don't get any information then it's type will be "undefined". Below if statement use for varify the type
        if(bearerHeader != undefined){
            // In token, there has two information.
            // 1. bearer 2. Token code
            // example: bearer gddgd5345dfgzxc2342@#$dfg.fsdfssrwrsdfsdffsdfsdfsdfsdf.rwerwfsd234234fsdf
            const bearer = bearerHeader.split(' ') // ['bearer'<index 0>, 'gddgd5345d.....<index 1>']

            // get JWT token from response header
            const token = bearer[1] // array <index 1> = 'gddgd5345d.....'

            // verify the token to read the data, which will store in "jwtuser"
            const jwtuser = jwt.verify(token, process.env.JWT_SECRET);
            // also set the token with request
            req.token = jwtuser;

            // if all virefication done then we will call the next method. 
            // Means user will redirect to that page where he want to go after authentication
            next()

        }else{
            res.status(401).send({message: "No token provided", success:false})
        }
        
    } catch (error) {
        res.status(403).json({message: `Error: invalid or expired token : ${error.message}`})
    }
}