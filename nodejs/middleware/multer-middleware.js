import express from 'express';
import multer from 'multer';

const app = express();

app.set("view engine", "ejs"); 


// Configure storage (files saved in 'uploads' folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder name
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // unique filename
  }
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.render("file-upload-form", {message:null})
})

// Route: Single file upload
app.post('/upload-single', upload.single('myFile'), (req, res) => {
  res.send(`File uploaded: ${req.file.filename}`);
});

// Route: Multiple files upload
app.post('/upload-multiple', upload.array('myFiles', 3), (req, res) => {
  res.send(`Uploaded ${req.files.length} files`);
});


app.listen("3000", ()=>{ console.log("server is runing") })