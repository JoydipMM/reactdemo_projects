
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");


const authMiddleware = async(req, res, next) => {
    try{
        const cookie = req.cookies;
        const { token } = cookie;
        if(!token){
            return res.status(400).send({message: "invalid token"});
        }

        //console.log("tokkenn is ",token);

        // token decode
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            return res.status(400).send({message: "invalid token"});
        }

        //console.log(decode);

        const {_id, email } = decode;

        const user = await User.findById(_id);
        if(!user){
            return res.status(400).send({message: "invalid token"});
        }

        req.user = {
            name: user.name,
            gender: user.gender,
            age: user.age,
            skills: user.skills
        };

        //console.log(req.user);


        next();

    }catch(error){
        res.status(400).send({message: error.message});
    }
}

module.exports = {authMiddleware};