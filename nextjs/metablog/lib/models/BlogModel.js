import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title:{
       type:String,
       require:true,
    },
    description:{
       type:String,
       require:true,
    },
    category:{
       type:String,
       require:true,
    },
    image:{
       type:String,
       require:true,
    },
    date:{
        type:Date,
        default: Date.now(),
    }
})

const BlogModel = mongoose.models.blogs || mongoose.model("blogs", BlogSchema);

export default BlogModel;