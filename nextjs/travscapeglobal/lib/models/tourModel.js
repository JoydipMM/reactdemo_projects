import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    thumbimage:{
        type:String,
        required:true,
    },
    data:{
        type:Date,
        default:Date.now()
    }
})

const TourModel =  mongoose.models.tour || mongoose.model("tour", tourSchema) ;

export default TourModel;

