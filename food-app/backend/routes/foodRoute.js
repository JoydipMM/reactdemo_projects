import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer"; // for image store system

// create express router. using this router we can create get, post method
const foodRouter = express.Router();

// img store engine
const foodImgStorage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`);
    }
})

const uploadFoodImg = multer({ storage:foodImgStorage })

// craete a post method
//foodRouter.post("/add", addFood); // without image
foodRouter.post("/add", uploadFoodImg.single("image"), addFood);


// export router
export default foodRouter;

// note: for create api endponter we will go to server.js