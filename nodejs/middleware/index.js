import express from 'express';
import { body, validationResult } from 'express-validator';


const app = express();
app.use(express.urlencoded({ extended:false }))
app.set("view engine", "ejs"); 

const validateOption = [
  body('username').notEmpty().withMessage('Username is required')
  .isLength({ min: 6, max:20 }).withMessage('Username must be at least 6 chars long and max 20 chars')
  .trim(),

  body('useremail').notEmpty()
  .isEmail().withMessage('Enter a valid email')
  .trim(),

  body('userpassword').notEmpty().withMessage('Password is required')
  .isLength({ min: 6, max:20 }).withMessage('Password must be at least 6 chars long and max 20 chars')
  .trim(),

  body('userage').notEmpty().withMessage('Username is required')
  .isNumeric().withMessage('Age must be number'),
  // body('usercity').isLength({ min: 6, max:12 }).withMessage('Password must be at least 6 chars long and max  chars'),
  // body('usercheck').isLength({ min: 6, max:12 }).withMessage('Password must be at least 6 chars long and max  chars'),
]

app.get("/", (req, res)=>{
  res.render("form-validation", {errorlist: null})
});

app.post("/validate-form", validateOption, (req, res)=>{
  const error = validationResult(req);
  if(error.isEmpty()){ // if no error found
    res.send(req.body);
  }
  res.send(error);
  //res.render("form-validation", {errorlist: error.array()})
});


app.listen("3000", ()=>{ console.log("server is runing") })