const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const { validateEditProfileData } = require('../utils/dataValidation');

const viewController = async (req, res)=>{
    try{
        const user = req.user;
        res.status(200).send({message:"user profile page", user: user});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

const editController = async (req, res)=>{
    try{
        const loggedUser = req.user; // this req.user is coming from auth middleware

        // check the requested fields are allowed or not
        if(!validateEditProfileData(req)){
            throw new Error("Invalid update fields");
        };

        // update the user data as per keys in req.body
        Object.keys(req.body).forEach(key => loggedUser[key] = req.body[key]); // here we are updating the loggedUser object with the data from req.body

        const token = req.cookies.token;
        decodeToken = await jwt.verify(token, process.env.JWT_SECRETKEY);
        //console.log(decodeToken);
        
        // now we will save the updated user data to db
        await userModel.findByIdAndUpdate(decodeToken._id, req.body, { new: true });
       
        res.status(200).send({message:"User profile data updated", user: loggedUser});

    }catch(err){
        res.status(500).send({message: err.message});
    }
}

module.exports = { 
    profileView: viewController,
    profileEdit: editController,
}