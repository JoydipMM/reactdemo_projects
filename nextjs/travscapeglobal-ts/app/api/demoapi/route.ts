import { connectDB } from "@/lib/config/db";
import ToursModel from "@/lib/models/tour.Model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        console.log("demo post test");
        await connectDB();

        const { title, description, thumbimage } = await req.json();
        await ToursModel.create({ title, description, thumbimage })

        return NextResponse.json({ message: "Data saved", success:true }, {status: 201}); 
        
    } catch (error:any) {
        console.error("Failed to save data", error);
        return NextResponse.json({ message: "Something Went Wrong!!!", success: false },{ status: 500 });
        
    }
    
};
export async function GET(req: Request, res: Response) {
    try {
        console.log("demo get test");
        await connectDB();
        const tours = await ToursModel.find();
        return NextResponse.json({ tours:tours, message: "Hello from GET!" }); 
        
    } catch (error:any) {
        console.error("Failed to get data", error);
        return NextResponse.json({ message: "Something Went Wrong!!!", success: false },{ status: 500 });
        
    }
    
};


export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');

  // Basic validation for ID
  if (!id || id.length !== 24) {
    return NextResponse.json({ message: 'Invalid or missing ID', success: false },{ status: 400 });
  }

  await connectDB();

  try {
    const deletedTour = await ToursModel.findByIdAndDelete(id);

    if (!deletedTour) {
      return NextResponse.json( { message: 'Tour not found', success: false }, { status: 404 } );
    }

    return NextResponse.json({ message: 'Data deleted', success: true }, { status: 200 } );
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json( { message: 'Failed to delete', success: false }, { status: 500 }
    );
  }
}