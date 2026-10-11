import { prisma } from "@/database/db";
import { Category, ProductType, Size } from "@/generated/prisma/enums";
import { requireAdmin } from "@/server-actions/auth/require-admin";
import { uploadImages } from "@/services/uploadImages";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    try{

        await requireAdmin();
        const formData = await request.formData();

        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        const price = Number(formData.get("price"));
        const stock = Number(formData.get("stock"));
        const category = formData.get("category") as Category;
        const productType = formData.get("productType") as ProductType;
        const bestSeller = formData.get("bestSeller") === "true";
        const sizes = formData.getAll("sizes") as Size[];
        //const colors = formData.getAll("colors");
        const colors = formData.getAll("colors").map((color) => JSON.parse(color as string) as {
            name: string, value:string
        });
        const images = formData.getAll("images") as File[];

        // upload the images before save the form data
        const ImageURL = await uploadImages(images);

        // save the product
        const newProduct = await prisma.product.create({
            data:{
                name,
                description,
                price,
                stock,
                category,
                productType,
                bestSeller,
                images: {
                    create:ImageURL.map((image) => ({
                        imageURL: image.ImageUrl,
                        publicId: image.publicId
                    }))
                },
                sizes:{
                    create:sizes.map((size) =>({
                        size,
                    }))
                },
                colors: {
                    create:colors.map((color)=>({
                        name: color.name,
                        value: color.value
                    }))
                }
            }
        })

        return NextResponse.json(
            { success: true,  message: "New Product created successfully.", productId: newProduct.id, },
            { status: 201 },
        )
        
    }catch(error){
        console.error(error);

        return NextResponse.json(
            { success: false, message: "Something went wrong." },
            { status:500 }
        )
    }
}