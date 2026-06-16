import { connectDB } from "@/shared/lib/db";
import { Note } from "@/shared/models/Notes";

export async function POST(request){

    // 1. when ever we calling any endpoint we need connect our database first
    await connectDB();

    // 2. get data from request body
    const { title, content } = await request.json();

    // 3. import model to the above from schema for save data to database 
    
    // 4. save the data to database
    const note = await Note.create({ title, content });
    // syntax: await ModelName.create({ key: value });
    console.log(note);
    // 5. return the saved data to client
    return Response.json(note, { 
        status: 201,
        success: true, 
        message: "note added successfully", 
    });
}


export async function GET(request){

    // 1. when ever we calling any endpoint we need connect our database first
    await connectDB();

    // 2. data from database
    const notes = await Note.find().sort({ createdAt: -1 }); // syntax: await ModelName.find().sort();

    // 3. return the data to client
    return Response.json(notes, { status: 200, message: "notes fetched successfully" });
}