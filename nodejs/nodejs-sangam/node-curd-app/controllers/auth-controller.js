const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
            role : role || "user"
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
        const { email, password } = req.body;

        // find the user email is valid or not
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({ success:false, message: "Invalid credential" });
        }

        // match password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(404).json({ success:false, message: "Invalid credential" });
        }

        // create token
        const userAccessToken = jwt.sign(
            {
                userId: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                role: user.role
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        )

        return res.status(200).json({ success:true, message: "User logged in successfully", userAccessToken });

    }catch(error){
        return res.status(500).json({ success:false, message: `Error: ${error.message}` || "Somthing went wrong" });
    }
}


const changePasswordUser = async(req, res) => {
    try{
        const loggedUser = await User.findById(req.userInfo.userId);
        const { oldPassword, newPassword } = req.body;
        // check user is valid or not
        if(!loggedUser){
            return res.status(404).json({ success:false, message: "User not found" });
        }

        //console.log(await bcrypt.compare("1990_Biplob", loggedUser.password));
        //console.log(await bcrypt.compare("1990_Biplob_new", loggedUser.password));

        // check old password is valid or not
        const isOldPasswordMatch = await bcrypt.compare(oldPassword, loggedUser.password);
        if(!isOldPasswordMatch){
            return res.status(404).json({ success:false, message: "Invalid credencial" });
        }

        // validate new password
        if(newPassword.length < 5 || newPassword.length > 20){
            return res.status(400).json({ success:false, message: "Password must be at least 5 characters long and at most 20 characters long" });
        }

        const checkOldAndNewPassword = await bcrypt.compare(newPassword, loggedUser.password);
        if(checkOldAndNewPassword){
            return res.status(500).json({ success:false, message: "Both password are same" })
        }else{

            loggedUser.password = newPassword;
            await loggedUser.save();
            return res.status(200).json({ success:true, message: "New Password Updated" });
        }

    }catch(error){
        return res.status(500).json({ success:false, message: `Error --: ${error.message}` || "Something went wrong" })
    }
}

module.exports = {
    registerUser,
    loginUser,
    changePasswordUser,
}