import { error } from 'console';
import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();

app.set("view engine", "ejs"); 

// file type validate
const filefilter = (req, file, cb) => {
  if(file.fieldname==="myFile"){
    //if(file.mimetype.startsWith('image/')){ // this is for all type of image format
    if(file.mimetype == 'image/jpeg' || file.mimetype =='image/jpg' || file.mimetype =='image/png'){ // this is for specific image format
      cb(null, true)
    }else{
      cb(new Error("Only images are allowed!"), false)
    }
  }else if(file.fieldname==="myFiles"){
    if(file.mimetype == 'application/pdf'){ // this is for specific image format
      cb(null, true)
    }else{
      cb(new Error("Only Pdf are allowed!"), false)
    }
  }else{
    cb(new Error("Unkown files"), false)
  }
}

// Configure storage (files saved in 'uploads' folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder name
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // unique filename
  }
});

const upload = multer({ 
  storage: storage,
  limits:{
    fileSize: 1024 * 1024 * 3 // 1kb * 1mb * 3 = 3mb
  },
  fileFilter: filefilter
});

app.get("/", (req, res) => {
    res.render("file-upload-form-template-2", {message:null})
})

// Route: Single/Multiple files upload
app.post('/file-upload-form', upload.fields([
  {name: "myFile", maxCount: 1},
  {name: "myFiles", maxCount: 3},
]), (req, res) => {
  // first we check that user is uploaded anything or not
  if(!req.files || req.files.length === 0){ 
    return res.status(400).send(`No File uploaded`)
  }
  res.send(req.files);
  //res.send(`Uploaded ${req.files.length} files`);
});


// we use file upload error using middleware
app.use( (error, req, res, next) => {
  if(error instanceof multer.MulterError){ 
    if (error.code === 'LIMIT_UNEXPECTED_FILE') { // this will check that the uploaded files are crossing the limit or not
      return res.status(400).send("Unexpected field uploaded. Please check your file count.");
    }
    return res.status(400).send(`Multer error : ${error.message} : ${error.code}`) // to get multer error
  }else if(error){ 
    return res.status(500).send(`Something went wrong : ${error.message} : ${error.code}`) // to get code or file error
  }
  next()
})

app.listen("3000", ()=>{ console.log("server is runing") })