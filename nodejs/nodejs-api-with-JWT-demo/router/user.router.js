import express from 'express';
import multer, { diskStorage } from 'multer';
import path from 'path';
import { addUser, allUsers, singleUser, updateUser, deleteUser } from "../controllers/user.controller.js";
const userRouter = express.Router()

const muterStorage = diskStorage({
    destination:(req, file,cb) => {
        cb(null, "./uploads")
    },
    filename:(req,file,cb)=>{
        const newFileName = Date.now()+path.extname(file.originalname) //path.extname = extract the filename only. Example: one.jpg >>>> one
        cb(null, newFileName)
    }
})

const fileFilter = (req, file,cb) => {
    //file.mimetype say that what is the file type
        if(file.mimetype.startsWith("image/")){
            cb(null, true)
        }else{
            cb(new Error("Only image can upload....", false))
        }
    }

const uploadFiles = multer({
    storage:muterStorage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024 * 1024 * 5
    },
})

// Add new user
userRouter.post("/", uploadFiles.single("useravater"), addUser)

// Get all users
userRouter.get("/", allUsers)

// Get single user
userRouter.get("/:id", singleUser)

// Update user
userRouter.put("/:id", uploadFiles.single("useravater"), updateUser)

// Delete user
userRouter.delete("/:id", deleteUser)



export default userRouter;
