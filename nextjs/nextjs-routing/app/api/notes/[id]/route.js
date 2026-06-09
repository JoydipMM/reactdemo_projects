import { connectDB } from "@/shared/lib/db";
import { Note } from "@/shared/models/Notes";

export async function DELETE(request, {params}){
    // 1. connect the database
    await connectDB();

    // 2. get the id from params and delete the data from database
    const {id} = await params;

    // 3. run delete by id query from model
    const note = await Note.findByIdAndDelete(id);
    console.log(note);

    return Response.json({ message: "note deleted successfully" });
}