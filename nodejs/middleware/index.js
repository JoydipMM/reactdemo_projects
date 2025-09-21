import express from 'express';
import { body, validationResult } from 'express-validator'; // import


const app = express();
app.use(express.urlencoded({ extended:false })) // this middleware required
app.set("view engine", "ejs"); // this is required for form template

// express validator validations
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
  res.render("form-validation", {errorlist: null}) // added the errorlist null value as a object for avoid error if not data found on page load
});


// use "validateOption" like app middleware
app.post("/validate-form", validateOption, (req, res)=>{
  const error = validationResult(req);
  if(error.isEmpty()){ // if no error found
    res.send(req.body);
  }
  //res.send(error); // this will show errors in json formate
  res.render("form-validation", {errorlist: error.array()}) // this will send the message in form page
});


app.listen("3000", ()=>{ console.log("server is runing") })