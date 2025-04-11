import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"; // use for create authentication
import bcrypt from "bcrypt"; // encrypt user data
import validator from "validator";


// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            res.json({ success:false,  message: "No User found" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            res.json({ success:false,  message: "password not match" })
        }

        const token = createToken(user._id);
        res.json({ success:true, token });

    } catch (error) {
        res.json({ success:false, message: "Error while creating token when login"  });
    }

}

// create token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// register
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // checking is the user already exists
       const exists = await userModel.findOne({email});
       if(exists){
        return res.json({ success:false,  message: "User already exists with this email" })
       }

       // validate email format and strong password
       if(!validator.isEmail(email)){
        return res.json({ success:false,  message: "Enter valid email" })
       }

       if(password.length<8){
        return res.json({ success:false,  message: "Enter password a strong password" })
       }

       // hashing password
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);
       
       const newUser = new userModel({
        name: name,
        password: hashedPassword,
        email: email,
       });

       const user = await newUser.save();
       const token = createToken(user._id);
       res.json({ success:true, token });

    } catch (error) {
        res.json({ success:false, message: "Error while creating token"  });
    }
}

export { loginUser, registerUser }