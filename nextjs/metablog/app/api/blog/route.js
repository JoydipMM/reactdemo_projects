import connectDB from '@/lib/config/db';
import BlogModel from '@/lib/models/BlogModel';
const { NextResponse, NextRequest } = require("next/server");
import {writeFile} from 'fs/promises';

const loadDB = async () => {
    await connectDB()
}

loadDB();

export async function GET(request){
    console.log("GET Hit");
    return NextResponse.json({
        msg: "GET API working"
    })
}

export async function POST(request){

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    // convert image into byte data and shore in variable
    const imageByteData = await image.arrayBuffer();
    //extract buffer from bytedata
    const imageBuffer = Buffer.from(imageByteData);
    // define the path where we store the image
    const imagePath = `./public/uploads/${timestamp}_${image.name}`;
    // write buffer to the path
    await writeFile(imagePath, imageBuffer);
    const blogImageURL = `/uploads/${timestamp}_${image.name}`;
    //console.log(blogImageURL);

    // save blog data
    const blogData = {
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        image:`${blogImageURL}`,
    }
    await BlogModel.create(blogData);
    console.log("Blog saved");


    // return NextResponse.json({blogImageURL})
    return NextResponse.json({
        success: true,
        msg: "Blog Added"
    })

}