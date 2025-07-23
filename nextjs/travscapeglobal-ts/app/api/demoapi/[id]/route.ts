import { connectDB } from "@/lib/config/db";
import ToursModel from "@/lib/models/tour.Model";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: string } }){
    const id = params.id;

    const { newTitle: title, newDescription: description } = await req.json();

    if (!id || id.length !== 24) {
        return NextResponse.json({ message: "Invalid ID format", success: false }, { status: 400 });
    }

    await connectDB();

    try {
        await ToursModel.findByIdAndUpdate(id, { title, description });
        return NextResponse.json({ message: "Data updated", success: true }, { status: 200 });
    } catch (error) {
        console.error("Update error:", error);
        return NextResponse.json({ message: "Failed to update", success: false }, { status: 500 });
    }
}



export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (!id || id.length !== 24) {
    return NextResponse.json(
      { message: "Invalid ID format", success: false },
      { status: 400 }
    );
  }

  await connectDB();

  try {
    const data = await ToursModel.findOne({_id:id});
    return NextResponse.json({ data, success: true }, { status: 200 });
  } catch (error) {
    console.error("fetch error:", error);
    return NextResponse.json(
      { message: "Failed to get single data", success: false },
      { status: 500 }
    );
  }
}

