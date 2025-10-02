import express from 'express';
import { dbConnect } from './utils/database.js';
import userRouter from './router/user.router.js';
import multer, { MulterError } from 'multer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

dbConnect();


app.get("/", (req, res)=>{
    res.send("<h1>API Demo</h1>")
})


app.use("/api/auth", userRouter)

// api error handling
app.use((error,req,res,next)=>{
    if(error instanceof MulterError){
        return res.status(400).json({message: `Image Error: ${error.message} : ${error.code}`})
    }else if(error){
        return res.status(500).json({message: `Something went wrong: ${error.message} : ${error.code}`})
    }
    next()
})

app.listen(3000, ()=>{
    console.log("Server is running")
})