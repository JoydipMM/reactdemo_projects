const User = require("../models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
    try{
        const { username, email, password, role } = req.body;

        const checkExitingUser = await User.findOne({
            $or: [
                {username: username},
                {email: email},
            ]
        })
        if(checkExitingUser){
           return res.status(400).json({ success:false, message: "User already exists" }); 
        }
        
        if(password.length < 5 || password.length > 20){
            return res.status(400).json({ success:false, message: "Password must be at least 5 characters long and at most 20 characters long" });
        }

        const addNewUser = await User.create({
            username,
            email,
            password,
            role
        });

        if(addNewUser){
            return res.status(201).json({ success:true, message: "User registered successfully", user: addNewUser });
        }

    }catch(error){
        return res.status(500).json({ success:false, message: `Error: ${error.message}` || "Somthing went wrong" });
    }
}

const loginUser = async (req, res) => {
    try{

    }catch(error){
        return res.status(500).json({ success:false, message: `Error: ${error.message}` || "Somthing went wrong" });
    }
}

module.exports = {
    registerUser,
    loginUser
}