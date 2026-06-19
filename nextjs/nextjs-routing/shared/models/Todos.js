// 1. import mongoose
import mongoose from "mongoose";

// 2. create schema for todo
const TodoSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: [true || "Todo Title is required"],
        minLength: [3 || "Todo Title must be at least 3 characters long"],
        maxLength: [50, "Todo Title must be at most 50 characters long"],
    },
    isCompleted:{
        type: Boolean,
        default: false,
    }
}, { timestamps:true });

// 3. create and export default model for Todo
const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
export default Todo;