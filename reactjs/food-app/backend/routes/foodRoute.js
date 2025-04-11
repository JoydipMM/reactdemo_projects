import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer"; // for image store system

// create express router. using this router we can create get, post method
const foodRouter = express.Router();

// img store engine
const foodImgStorage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, callback) => {
        //return callback(null, `${Date.now()}${file.originalname}`);
        return callback(null, Date.now() + '-' +file.originalname);
    }
})

const uploadFoodImg = multer({ storage:foodImgStorage })

// craete a post method
//foodRouter.post("/add", addFood); // without image
foodRouter.post("/add", uploadFoodImg.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);


// export router
export default foodRouter;

// note: for create api endponter we will go to server.js