const Image = require("../models/Image");
const { uploadToCloud } = require("../helpers/cloudenaryHelper");
const cloudenary = require("../config/cloudenary");
const fs = require("fs");

const uploadImageController = async (req, res) =>{
    try{
        // first check if file is missing in request object
        if(!req.file){
            return res.status(400).json({ success:false, message: "Image is required" });
        }

        // after file check upload file to cloudinary and save to database
        const { url, public_id, format, resource_type } = await uploadToCloud(req.file.path);

        // store image url along with related details in database
        const newlyUploadedImage = await Image.create({ 
            url: url, 
            public_id: public_id, 
            format: format, 
            resource_type: resource_type, 
            uploaded_by: req.userInfo.userId 
        });

        if(newlyUploadedImage){

            // remove the file from uploads folder after successfully uploaded to cloudinary and database
            fs.unlinkSync(req.file.path);


            return res.status(201).json({ success:true, message: "Image uploaded successfully", image: newlyUploadedImage });
        }

    }catch(error){
       return res.status(500).json({ success:false, message: `Error:: ${error.message}` || "Somthing went wrong" }); 
    }
}


const fetchImagesController = async (req, res) =>{
    try{
        const getImages = await Image.find({}).populate("uploaded_by" , "email username");
        if(getImages.length > 0){
            return res.status(200).json({ success:true, message: "Images found", images: getImages, total: getImages.length, limit: 5, skip: 0 });
        }
    }catch(error){
        return res.status(500).json({ success:false, message: `Error:: ${error.message}` || "Somthing went wrong" });
    }

}

const fetchImagesByUserController = async (req, res) =>{
    try{
        const loggedUserId = req.userInfo.userId;
        console.log(loggedUserId)
        const getImages = await Image.find({uploaded_by: loggedUserId}).populate("uploaded_by" , "email username");
        if(getImages.length > 0){
            return res.status(200).json({ success:true, message: "Images found", images: getImages, total: getImages.length, limit: 5, skip: 0 });
        }
    }catch(error){
        return res.status(500).json({ success:false, message: `Error:: ${error.message}` || "Somthing went wrong" });
    }

}


const deleteImageController = async (req, res) =>{
    try{
        // 1. get image id from req.params.imageId and user id from req.userInfo
        const deletedImageId = req.params.imageId;
        const loggedUserId = req.userInfo.userId;

        // 2. find image details from params id
        const isValidateImage = await Image.findById(deletedImageId);

        // 2. validate the image id is valid or not
        if(!isValidateImage){
            return res.status(404).json({ success:false, message: "Image not found" });
        }

        // 3. validate the user who is deleting the image is valid or not
        if(!isValidateImage.uploaded_by.toString() === loggedUserId){
            return res.status(403).json({ success:false, message: "You are not authorized to delete this image" });
        }

        // 4. delete the image from cloudinary
        // 5. delete the image from mongodb database
        const deleteImageFromCloudenary = await cloudenary.uploader.destroy(isValidateImage.public_id);

        if(deleteImageFromCloudenary.result === "ok"){
            const deletedImage = await Image.findByIdAndDelete(deletedImageId);
            return res.status(200).json({ success:true, message: "Image deleted successfully", image: deletedImage });
        }


    }catch(error){
        res.status(500).json({ success:false, message: `Error:: ${error.message}` || "Somthing went wrong" });
    }
}

module.exports = { uploadImageController, fetchImagesController, fetchImagesByUserController, deleteImageController };