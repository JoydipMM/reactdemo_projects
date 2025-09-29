import express from 'express';
import User from "../models/user.model.js";
import { addUser, allUsers, singleUser, updateUser, deleteUser } from "../controllers/user.controller.js";
const userRouter = express.Router()


// Add new user
userRouter.post("/", addUser)

// Get all users
userRouter.get("/", allUsers)

// Get single user
userRouter.get("/:id", singleUser)

// Update user
userRouter.put("/:id", updateUser)

// Delete user
userRouter.delete("/:id", deleteUser)



export default userRouter;
