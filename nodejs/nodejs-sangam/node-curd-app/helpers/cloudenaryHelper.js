const cloudenary = require('../config/cloudenary');


const uploadToCloud = async (filePath) => {
    try{
        const result = await cloudenary.uploader.upload(filePath);
        // response list : https://cloudinary.com/documentation/upload_images#landingpage
        return {
            url: result.url,
            public_id: result.public_id,
            format: result.format,
            resource_type: result.resource_type
        }

    }catch(error){
        console.log("Error >> while uploading to cloudinary", error);
        throw new Error("Error >> while uploading to cloudinary", error);
    }
}


module.exports = { uploadToCloud };