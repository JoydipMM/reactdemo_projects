import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food
const addFood = async (req, res) => {
    // we will create route for endpoint
    let image_filename = `${ req.file.filename }`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image: image_filename,
    })
    try {
        await food.save();
        res.json({ success:true, message:"Food added" })
    } catch (error) {
        console.log(error);
        res.json({ success:false, message:"error on save" })
    }
}

export { addFood }