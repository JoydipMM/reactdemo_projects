import express from 'express';
import { dbConnect } from './utils/database.js';
import userRouter from './router/user.router.js';

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

dbConnect();


app.get("/", (req, res)=>{
    res.send("<h1>API Demo</h1>")
})


app.use("/api/auth", userRouter)



app.listen(3000, ()=>{
    console.log("Server is running")
})