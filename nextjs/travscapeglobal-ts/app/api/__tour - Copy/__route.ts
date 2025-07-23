import { connectDB } from "../../../lib/config/db";
import ToursModel from "../../../lib/models/tour.Model";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(request: any) {
    try {
      // Ensure DB is connected BEFORE doing anything else
      await connectDB();
  
      const formData = await request.formData();
      // get image from image field
      const thumbimage = formData.get("thumbimage");
      const timeStamp = Date.now();
      // for store image in public folder
      //-----------------------------------------------------------
      // 1st convert the image in byte data
      const imageByteData = await thumbimage.arrayBuffer();
      // 2nd extract the buffer
      const buffer = Buffer.from(imageByteData);
      // 3rd define the path for store image
      const thumbPath = `./public/upload/${timeStamp}_${thumbimage.name}`;
      // 4th write above buffer in thumbpath
      await writeFile(thumbPath, buffer);
      // create image path for frontend
      const thumbImgUrl = `/${timeStamp}_${thumbimage.name}`;


      const tourData = {
        title:`${formData.get("title")}`,
        description:`${formData.get("description")}`,
        thumbimage: `${thumbImgUrl}`
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
    return NextResponse.json({ msg: "Tour test api working" })
}

