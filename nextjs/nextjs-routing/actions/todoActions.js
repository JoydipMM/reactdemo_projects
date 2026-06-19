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