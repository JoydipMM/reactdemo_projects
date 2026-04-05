const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

const authMiddleware = async (req, res, next) => {
    try{
        // read the token from request cookies
        const cookie = req.cookies;
        const {token} = cookie;

        // validate the token
        if(!token){
            return res.status(401).send({message: "invalid token"});
        }
        // if token valid then decode the token
        const decodeToken = await jwt.verify(token, process.env.JWT_SECRETKEY, {ignoreExpiration: true});

        // validate the decoded token
        if( !decodeToken){
            return res.status(400).send({message: "invalid token"});
        }

        // assign decoded token to a variable
        const {_id} = decodeToken;

        // find the user from database by id
        const user = await userModel.findById(_id);

        // check if user exist
        if(!user){
            return res.status(400).send({message: "user not found"});
        }

        // if we got user then assign user data to request object
        req.user = { _id:user._id, fullname: user.fullname, gender: user.gender, skills: user.skills };

        // pass the request to the next middleware
        next();

    }catch(err){
        res.status(400).send({message: err.message});
    }
    
}

module.exports = { authMiddleware }