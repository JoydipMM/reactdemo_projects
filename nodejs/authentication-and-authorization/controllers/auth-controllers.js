
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// register
const authRegister = async (req, resp) => {
    try{

        // extract user information from request body
        const { username, email, password, role } = req.body;

        //if check the user is already exits in our database
        const checkExitingUser = await User.findOne({
            $or: [{ username}, {email}]
        });
        if(checkExitingUser){
            resp.status(400).json({
                success: false,
                message: "User already exist !!!!!"
            });
        }

        // hash password for encrypted the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create a user in database
        const newlyCreatedUser = new User({
            username,
            email,
            password: hashedPassword,
            role : role || 'user'
        });

        console.log("newdata  ===== ", newlyCreatedUser)

        await newlyCreatedUser.save();

        if(newlyCreatedUser){
            resp.status(200).json({
                success: true,
                message: "New User added",
                data: newlyCreatedUser
            });
        }else{
            resp.status(400).json({
                success: false,
                message: "Unable to register the user"
            });
        }



    }catch(error){
        resp.status(404).json({
            success: false,
            message : "Some error occured !!!"
            }
        )
    }
}

// login
const authLogin = async (req, resp) => {
    try{
        // extract user information from request body
        const { username, password } = req.body;

        // find the current user is exist in database
        const user = await User.findOne({username});

        if(!user){
            resp.status(400).json({
                success: false,
                message: "invalid credencials"
            });
        }

        // check the password is match or not
        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch){
            resp.status(400).json({
                success: false,
                message: "invalid credencials"
            });
        }

        // create user token
        const accessToken = jwt.sign({
            id: user._id,
            username: user.username,
            role: user.role
        }, process.env.JWT_SECRETE_KEY, {
            expiresIn: '15m'
        });

        resp.status(200).json({
            success: true,
            message: "Logged in successfully",
            accessToken
        });


    }catch(error){
        resp.status(500).json({
            success: false,
            message : "Some error occured !!!"
            }
        )
    }
}


module.exports =  { authLogin, authRegister } 