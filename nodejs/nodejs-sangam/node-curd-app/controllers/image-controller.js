const Image = require("../models/Image");
const { uploadToCloud } = require("../helpers/cloudenaryHelper");
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

module.exports = { uploadImageController };