import { connectDB } from "../../../lib/config/db";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
import TourModel from "../../../lib/models/tourModel";


const LoadDB = async () => {
    await connectDB()
}

LoadDB();

export async function GET(request) {
    //console.log("GET hit");
    return NextResponse.json({msg:"API Working"})
}


export async function POST(request) {
    const formData = await request.formData();
    const timeStamp = Date.now();

    // get image from image field
    const thumbimage = formData.get("thumbimage");

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
    // test
    //console.log(thumbImgUrl);

    const tourData = {
        title:`${formData.get("title")}`,
        description:`${formData.get("description")}`,
        thumbimage: `${thumbImgUrl}`
    }

    await TourModel.create(tourData);
    console.log("Tour Saved");

    //return NextResponse.json({thumbImgUrl})
    return NextResponse.json({success: true, msg: "Tour Added" })
}