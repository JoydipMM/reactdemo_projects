const express = require('express');
const connectDB = require('./config/database')
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');
const requestRouter = require('./routes/request');
app.use(express.json())
app.use(cookieParser());

// cors configuration
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


// auth router
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/request", requestRouter);
app.use("/user", userRouter);



connectDB().then(()=>{
    console.log('Connected to MongoDB');
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
}).catch((error)=>{
    console.log(error);
})

