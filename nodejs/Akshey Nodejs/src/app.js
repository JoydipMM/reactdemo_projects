const express = require('express');
const connectDB = require('./config/database')
const cookieParser = require('cookie-parser');
const app = express();
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const requestRouter = require('./routes/request');
app.use(express.json())
app.use(cookieParser());


// auth router
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/request", requestRouter);



connectDB().then(()=>{
    console.log('Connected to MongoDB');
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
}).catch((error)=>{
    console.log(error);
})

