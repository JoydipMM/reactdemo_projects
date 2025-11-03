import express from 'express';
import { registerUser, loginUser, logoutUser } from "../controllers/user.controller.js";
const authRouter = express.Router()


// register user
authRouter.post("/register", registerUser)

// login
authRouter.post("/login", loginUser)

// logout
authRouter.post("/logout", logoutUser)


export default authRouter;
