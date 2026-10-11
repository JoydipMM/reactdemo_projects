import cloudinary from "@/lib/cloudinary";

interface UploadImageresult {
    publicId:string,
    ImageUrl:string
}

export async function uploadImages(images: File[]): Promise<UploadImageresult[]>{
    if(images.length < 1 || images.length > 4){
        throw new Error("Please upload between 1 and 4 images");
    }

    return Promise.all(
        images.map(async (file) =>{
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            return new Promise<UploadImageresult>((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: "ecomerce2-uploads",
                        transformation:[
                            {
                                format: "webp",
                            }
                        ],
                    },

                    (error, result) => {
                        if(error || !result){
                            reject(error);
                            return;
                        }

                        resolve({
                            ImageUrl: result.secure_url,
                            publicId: result.public_id
                        })
                    }
                );

                stream.end(buffer);
            });
        })
    );
}