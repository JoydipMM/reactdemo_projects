const express = require('express');
const connectDB = require('./config/database')
const userModel = require('./models/user')
const app = express();
app.use(express.json())


// below code is for signup api: http://localhost:3001/signup
app.post("/signup", async (req, res)=>{
    /*const dummyuserObj = {
        name: "raj",
        email: "tYt2F@example.com",
        password: "1234"
    }*/
    console.log(req.body);

    // to get json data first use json middleware
    
    // to save the dummydata user collection we need to make a new instance of user model
    // first inport user model at the top
    // create new instance of user model and pass the data info
    const user = new userModel(req.body);

    // to save data we use try catch block
    try{
        // save data to db. this save method is return promise add await before user.save() and add async before router handler
        await user.save()
        // at last send the response
        res.send({message: "user created successfully", user: user});
    }catch(err){
        res.status(500).send({message: err.message});
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


app.patch("/user", async (req, res)=>{
    try{
        const users = await userModel.findOneAndUpdate({email: req.body.email}, req.body, {new: true});
        if(users.length === 0){
          res.status(404).send({message: "user not found"});  
        }
        res.send(users);
    }catch(err){
        res.status(500).send({message: err.message});
    }
});


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

