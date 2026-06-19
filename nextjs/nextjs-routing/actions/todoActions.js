"use server";
import { connectDB } from "@/shared/lib/db";
import Todo from "@/shared/models/Todos";
import { todoSchema } from "@/app/(public)/todos/Schemas/todoSchema";

export  async function addTodo(data){
    await connectDB();
    // parse fields with schema to validate data
    const validatedFields = todoSchema.safeParse(data);
    if(!validatedFields.success){
        return { 
            success: false, 
            message: validatedFields.error.issues[0].message 
            // {success: false, message: 'Todo title must be at least 3 characters long'}
            // if some one give characters above than 50 it will show "Todo title must be at most 50 characters long" message
        };
    }
    try{
        const newTodo = await Todo.create(validatedFields.data);
        return JSON.parse(JSON.stringify({ success: true, message: "todo added successfully", todo: newTodo }));
    }catch(err){
        console.log("Error: ", err);
        //Duplicate title error code 11000
        if (err.code === 11000) {
            return {
                success: false,
                message: "Todo with this title already exists",
            };
        }
        return {
            success: false,
            message: `${err.message} - ${err.code}`,
        };
    }

}


export  async function listTodo(){
    await connectDB();
     try{
        const todos = await Todo.find({}).sort({ createdAt: -1 }); // syntax: await ModelName.find().sort();
        //return todos;
        console.log(JSON.parse(JSON.stringify({ success: true, message: "todos successfully", todolist: todos })));
        return JSON.parse(JSON.stringify({ success: true, message: "todos successfully", todolist: todos }));
     }catch(error){

     }

}

export async function completeTodo(id, isCompleted){
    await connectDB();
    try{
        const updateTodo = await Todo.findByIdAndUpdate(id, {isCompleted}, { new: true });
        //console.log(updateTodo);
        return JSON.parse(JSON.stringify({ success: true, message: "Todo status updated successfully", todo: updateTodo }));
        
    }catch(error){
        console.log("Error: ", error);
        //Duplicate title error code 11000
        if (error.code === 11000) {
            return {
                success: false,
                message: "Todo status updated successfully",
            };
        }
        return {
            success: false,
            message: `${error.message} - ${error.code}`,
        };
    }
}