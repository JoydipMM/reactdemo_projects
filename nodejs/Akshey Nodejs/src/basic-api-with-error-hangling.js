const express = require('express');
const connectDB = require('./config/database')
const userModel = require('./models/user')
const validator = require('validator');
const {signupDataValidation} = require('./utils/dataValidation')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json())
app.use(cookieParser());

// below code is for signup api: http://localhost:3001/signup
app.post("/signup", async (req, res)=>{
    /*const dummyuserObj = {
        name: "raj",
        email: "tYt2F@example.com",
        password: "1234"
    }*/
    console.log(req.body);

    // to get json data first use json middleware

    // validate email
    // if(!validator.isEmail(req.body.email)){
    //     return res.status(400).send({message: "Invalid email"});
    // }

    
    // to save data we use try catch block
    try{
        // add data validation first
        signupDataValidation(req);

        // hash password:
        const {name, email, password, gender, skills} = req.body;
        // syntax: await bcrypt.hash(password, saltRounds) ==> saltRounds is number of rounds to generate the hash (default is 10)
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;

        
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
    
});

// login api
app.post("/login", async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).send({message: "invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).send({message: "invalid credentials"});
        }

        // create jwt token
        const token = await jwt.sign({_id: user._id, email: user.email}, "thisisasecretkey@1990");
        //console.log(token);

        //res.cookie("token", token, {httpOnly: true, maxAge: 1000*60*60*24});
        res.cookie("token", token);
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
});

// user profile
app.get("/profile", async (req, res)=>{

    // getr token from cookie
    const cookie = req.cookies;
    //console.log(cookie);

    // assign token to a variable
    const {token} = cookie;

    // check if token is exist
    if(!token){
        return res.status(400).send({message: "invalid token"});
    }
    
    // validate token :  Note : jwt.verify(token, secretkey) don't gave boolean value, it gave a decoded object/value
    const decodedToken = jwt.verify(token, "thisisasecretkey@1990");
    // console.log(decodedToken);
    // in console: { _id: '69bd9bf79dabdc925b24b493', iat: 1774098760 }

    // now we can get user details from token
    const {_id} = decodedToken;
    const user = await userModel.findById(_id);
    if(!user){
        return res.status(400).send({message: "user not found"});
    }else{
        res.status(200).send({message:"user profile page", user: {
            name: user.name,
            email: user.email,
            gender: user.gender,
            skills: user.skills
        }});
    } 
    
});


// get all users
app.get("/all-users", async (req, res)=>{
    try{
        const users = await userModel.find({});
        if(users.length === 0){
          res.status(404).send({message: "no user not found"});  
        }
        res.send(users);
    }catch(err){
        res.status(500).send({message: err.message});
    }
});

app.get("/user", async (req, res)=>{
    try{
        const users = await userModel.findOne({email: req.body.email});
        if(users.length === 0){
          res.status(404).send({message: "user not found"});  
        }
        res.send(users);
    }catch(err){
        res.status(500).send({message: err.message});
    }
});


app.patch("/user", async (req, res) => {
    const { userID, ...updateData } = req.body;

    const ALLOWED_UPDATE_FIELDS = ["gender"]; // in this array we will gave the key name of the data which we want to update

    const isAllowed = Object.keys(updateData).every(key =>
        ALLOWED_UPDATE_FIELDS.includes(key)
    );

    // if isAllowed is false then return error
    if (!isAllowed) {
        return res.status(400).send({ message: "Invalid update fields" });
    }

    try {
        const user = await userModel.findByIdAndUpdate(
            userID,
            updateData,
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).send({ message: "user not found" });
        }

        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});


// get user id from params
app.patch("/user/:userID", async (req, res) => {
    const userID = req.params?.userID; // get user id from params
    const { ...updateData } = req.body;

    const ALLOWED_UPDATE_FIELDS = ["gender", "skills"]; // in this array we will gave the key name of the data which we want to update

    const isAllowed = Object.keys(updateData).every(key =>
        ALLOWED_UPDATE_FIELDS.includes(key)
    );

    // if isAllowed is false then return error
    if (!isAllowed) {
        return res.status(400).send({ message: "Invalid update fields" });
    }

    try {
        const user = await userModel.findByIdAndUpdate(
            userID,
            updateData,
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).send({ message: "user not found" });
        }

        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});


app.delete("/user", async (req, res)=>{
    const userId = req.body.userId;
    //const users = await userModel.findByIdAndDelete({_id: userId});
    const users = await userModel.findByIdAndDelete(userId);
    console.log(users);
    if(!users){
        res.status(404).send({message: "user not found"});  
    }
    try{
        res.status(200).send({message: "user deleted successfully"});
    }catch(err){
        res.status(500).send({message: "Something went wrong!!!", error: err.message});
    }
})


/*
// this route will match with all http route method
app.use('/', (req, res) => {
    res.send("Home App Page !");
});
*/



connectDB().then(()=>{
    console.log('Connected to MongoDB');
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
}).catch((error)=>{
    console.log(error);
})

