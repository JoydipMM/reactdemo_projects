import { connectDB } from "../../../lib/config/db";
import ToursModel from "../../../lib/models/tour.Model";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(request: any) {
    try {
      // Ensure DB is connected BEFORE doing anything else
      await connectDB();
  
      const formData = await request.formData();

      const tourData = {
        title:`${formData.get("title")}`,
        description:`${formData.get("description")}`,
        thumbimage: `${formData.get("thumbimage")}`
      };
  
      await ToursModel.create(tourData);
  
      console.log("Tour saved");
      return NextResponse.json({ success: true, msg: "New tour added" });
  
    } catch (err:any) {
      console.error("Failed to save tour:", err.message);
      return NextResponse.json({ success: false, msg: "Error saving tour" }, { status: 500 });
    }
  }


export async function GET(request:any){
    // test api route
    //return NextResponse.json({ msg: "Tour test api working" })

    try {

    await connectDB();

    const { searchParams } = new URL(request.url);
    const tourId = searchParams.get("id");

    if(tourId){
      const tour = await ToursModel.findById(tourId);
      return NextResponse.json({ tour: tour, success:true }, { status: 200 })
    }else{
      const tourlist = await ToursModel.find();
      return NextResponse.json({ tours: tourlist, success:true }, { status: 200 })
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Something went wrong", success: false },
      { status: 500 }
    );
  }


}

