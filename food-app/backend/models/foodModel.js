import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    name: { type:String, required:true },
    description: { type:String, required:true },
    category: { type:String, required:true },
    price: { type:Number, required:true },
    image: { type:String, required:true },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)
// note: mongoose.models.food -> [this will not create another model when this page rerender] || mongoose.model("food", foodSchema) -> this will create model when page is refresh

export default foodModel;