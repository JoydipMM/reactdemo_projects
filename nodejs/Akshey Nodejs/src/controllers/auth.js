const userModel = require('../models/user');
const {signupDataValidation} = require('../utils/dataValidation')
const bcrypt = require('bcrypt');

const signupController = async (req, res)=>{

    // to save data we use try catch block
    try{
        // add data validation first
        signupDataValidation(req);

        // hash password:
        const {name, email, password, gender, skills} = req.body;
        // syntax: await bcrypt.hash(password, saltRounds) ==> saltRounds is number of rounds to generate the hash (default is 10)
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // to save the dummydata user collection we need to make a new instance of user model
        // first inport user model at the top
        // create new instance of user model and pass the data info
        const user = new userModel({
            name,
            email,
            password: hashedPassword,
            gender,
            skills
        });
        // save data to db. this save method is return promise add await before user.save() and add async before router handler
        await user.save()
        // at last send the response
        res.send({message: "user created successfully", user: user});
    }catch(err){
        res.status(500).send({message: err.message});
    }
    
}


const loginController = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).send({message: "invalid credentials"});
        }
        //const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(400).send({message: "invalid credentials"});
        }

        // create jwt token
        // const token = await jwt.sign({_id: user._id, email: user.email}, "thisisasecretkey@1990");

        // jwt token with expiry
        //const token = await jwt.sign({_id: user._id, email: user.email}, "thisisasecretkey@1990", { expiresIn: "1m" });

        // jwt token coming from jwt helper method from schema
        const token = await user.getJWT(); // user is an instance of user model
        //console.log(token);

        //res.cookie("token", token, {httpOnly: true, maxAge: 1000*60*60*24});
        res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000), httpOnly: true});
        res.send({message: "user logged in successfully", 
            user: {
                //_id: user._id, // we don't send id because it is not a secure data, we send it with jwt
                name: user.name,
                //email: user.email, // we don't send id because it is not a secure data, we send it with jwt
                gender: user.gender,
                skills: user.skills
            }
        }); // here we send the user data without password
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

const logoutController = async (req, res)=>{
    try{
        //res.clearCookie("token");
        res.cookie("token", null, {expires: new Date(Date.now())});
        res.send({message: "user logged out successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}


module.exports = {
    signup: signupController,
    login: loginController,
    logout: logoutController
}