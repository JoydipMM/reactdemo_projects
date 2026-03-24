const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const connectDB = require("./config/database");
const { signupDataValidation } = require("./utils/datavalidation");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("./models/user.model");
const {authMiddleware} = require("./middleware/authMiddleware");

const port = 3001;

app.use(express.json());
app.use(cookieParser());

const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
]

app.get("/", (req, res) => {
    res.send(data);
});

app.post("/signup", async (req, res) => {
    //console.log(req.body);
    try{
        // field data validation
        signupDataValidation(req)

        // get password from request
        const {name, email, password, gender, age, skills } = req.body;

        // password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        // hash password assign to request password
        req.body.password = hashedPassword;

        // create instance of user model and pass request body
        const user = new User({
            name : name,
            email: email,
            password: hashedPassword,
            gender: gender,
            age: age,
            skills: skills
        });
        // save user data
        await user.save();


        res.send({ message: "Signup successful", data: user });
            
    }catch(error){
        res.status(400).send({message: error.message});
    }
});


app.post("/login", async (req, res) => {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            throw new Error("Email and password is required");
        }

        const user = await User.findOne({email: email});

        if(!user){
            throw new Error("Invalid credentials");
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            throw new Error("Invalid credentials");
        }

        const token = await jwt.sign({_id: user._id, email: user.email}, process.env.JWT_SECRET, { expiresIn: 60000 });
        res.cookie("token", token, { expires: new Date(Date.now() + 60000), httpOnly: true });

        //console.log(cookie);

        res.send({ message: "Login successful", user: {
            name: user.name,
            gender: user.gender,
            age: user.age,
            skills: user.skills
        }  });


    }catch(error){
        res.status(400).send({message: error.message});
    }
    
});


app.get("/profile", authMiddleware, async (req, res) => {
    try{
        //const user = await User.findById(req.user._id).select("-password");
        const user = req.user;
        res.send({ message: "Profile data", data: user });
    }catch(error){
        res.status(400).send({message: error.message});
    }
});


connectDB().then(()=>{
    try{
        console.log("Database connected");
       app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        }); 
    }catch(error){
        console.log(error);
    }
})

