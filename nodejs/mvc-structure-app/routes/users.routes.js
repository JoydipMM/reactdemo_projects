//import User from '../models/user.models.js';
import express from "express";
const router = express.Router();
import  {
    getUsersList, 
    singleUserView, 
    addNewUser, 
    editUserGettMethod, 
    editUserPostMethod,
    deleteUser
} from "../controller/users.controller.js";


router.get("/userslist", getUsersList)

router.get("/userview/:id", singleUserView)

router.get("/useradd", (req, res)=>{ res.render("users/add") })

router.post("/useradd", addNewUser)

router.get("/useredit/:id", editUserGettMethod)

router.post("/useredit/:id", editUserPostMethod)

router.get("/userdelete/:id", deleteUser)



export default router;
