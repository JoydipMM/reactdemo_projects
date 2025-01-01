
const express = require("express");
const multer = require("multer");
require('./config');
const Product = require('./product');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback){
            callback(null, "uploads")
        },
        filename: function(req, file, callback){
            callback(null, file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file")


app.post('/upload', upload, async (req,resp)=>{
    resp.send("file uploaded")
});



app.listen(5000);

