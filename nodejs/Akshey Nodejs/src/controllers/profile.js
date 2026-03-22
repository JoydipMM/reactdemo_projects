const userModel = require('../models/user');

const profileController = async (req, res)=>{
    try{
        const user = req.user;
        res.status(200).send({message:"user profile page", user: user});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}


module.exports = { 
    profile: profileController 
}