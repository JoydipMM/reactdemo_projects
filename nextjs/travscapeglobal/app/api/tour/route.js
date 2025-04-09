import { connectDB } from "../../../lib/config/db";
import ToursModel from "../../../lib/models/TourModel";
import { NextResponse } from "next/server";


// const LoadDB = async () => {
//     await connectDB();
// }

// LoadDB();

export async function POST(request) {
    try {
      // Ensure DB is connected BEFORE doing anything else
      await connectDB();
  
      const formData = await request.formData();
      const tourData = {
        title: formData.get("title"),
        description: formData.get("description"),
      };
  
      await ToursModel.create(tourData);
  
      console.log("Tour saved");
      return NextResponse.json({ success: true, msg: "New tour added" });
  
    } catch (err) {
      console.error("Failed to save tour:", err.message);
      return NextResponse.json({ success: false, msg: "Error saving tour" }, { status: 500 });
    }
  }


export async function GET(request){
    return NextResponse.json({ msg: "Tour test api working" })
}

