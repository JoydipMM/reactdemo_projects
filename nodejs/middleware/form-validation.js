import express from 'express';
import { body, validationResult } from 'express-validator'; // import


const app = express();
app.use(express.urlencoded({ extended:false })) // this middleware required
app.set("view engine", "ejs"); // this is required for form template

// express validator validations
const validateOption = [
  body('username').notEmpty().withMessage('Username is required')
  .isLength({ min: 6, max:20 }).withMessage('Username must be at least 6 chars long and max 20 chars')
  .trim()
  .isAlpha().withMessage('Username must contain only letter')
  .custom(value => {
    if(value === "admin"){
      throw new Error("Username 'Admin' not allowed ")
    }
    return true;
  }),

  body('useremail').notEmpty()
  .isEmail().withMessage('Enter a valid email')
  .trim()
  .blacklist('<>')
  .normalizeEmail(),

  body('userpassword').notEmpty().withMessage('Password is required')
  .isLength({ min: 6, max:20 }).withMessage('Password must be at least 6 chars long and max 20 chars')
  .isStrongPassword().withMessage('Password must be strong')
  .trim(),

  body('userconfirmpassword').notEmpty().withMessage('Confirm Password is required')
  .isLength({ min: 6, max:20 }).withMessage('Confirm Password must be at least 6 chars long and max 20 chars')
  .custom((value, { req }) => {
    if (value !== req.body.userpassword) {
      throw new Error('Passwords do not match');
    }
    return true;
  })
  .isStrongPassword()
  .trim(),

  body('userage').notEmpty().withMessage('Age is required')
  .isNumeric().withMessage('Age must be number')
  .isInt({ min: 18, max:50 }).withMessage('Age between 18 to 50'),

  body('usercity').notEmpty().withMessage('City is required')
  .isIn(["kolkata", "delhi"]),

  body('usercheck').notEmpty().withMessage('Check is required'),
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