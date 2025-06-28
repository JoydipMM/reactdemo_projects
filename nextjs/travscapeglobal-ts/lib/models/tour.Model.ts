import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required: true, 
        unique: true
    },
    description:{
        type:String,
        required:true,
    },
    thumbimage:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now() 
    }
}, { timestamps: true })


const ToursModel = mongoose.models.tour ||  mongoose.model("tour", tourSchema);

export default ToursModel;

