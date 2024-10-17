import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food
const addFood = async (req, res) => {
    // we will create route for endpoint
    let image_filename = `${ req.file?.filename }`;

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

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success:true, data:foods })
    } catch (error) {
        console.log(error);
        res.json({ success:false, message:"error on fetch list" })
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{});
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success:true, message:"remove successfully" })
    } catch (error) {
        console.log(error);
        res.json({ success:false, message:"error on delete" })
    }
}

export { addFood, listFood, removeFood }