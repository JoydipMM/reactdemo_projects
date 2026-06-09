import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    }
}, { timestamps: true });

export default noteSchema;

// create model for note
export const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);