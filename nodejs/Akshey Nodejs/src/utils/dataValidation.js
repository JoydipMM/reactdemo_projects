const validator = require('validator');

const signupDataValidation = (req) => {
    const { name, email, password, gender, dpPhoto="" } = req.body;

    const nameRegex = /^[A-Za-z\s]+$/;

    // user name validation
    if(!name){
        throw new Error("Name is required | check from utils validation lavel validation");
    }else if(name.length < 5 || name.length > 20){
        throw new Error("Name should be between 5 to 20 characters | check from utils validation lavel validation");
    }else if(name && !nameRegex.test(name)){
        throw new Error("Name should contain only alphabets and spaces | check from utils validation lavel validation");
    }

    // user dp photo validation
    if(dpPhoto){
        if(!validator.isURL(dpPhoto)){
            throw new Error("Invalid dp photo url | check from utils validation lavel validation");
        }
    }

    // user password validation
    if(!password){
        throw new Error("Password is required | check from utils validation lavel validation");
    }else if(password.length < 8 || password.length > 20){
        throw new Error("Password should be between 8 to 20 characters | check from utils validation lavel validation");
    }else if(password && !validator.isStrongPassword(password)){
        throw new Error("Password should be strong | check from utils validation lavel validation");
    }

    if(!gender){
        throw new Error("Gender is required | check from utils validation lavel validation");
    }else if(!["male", "female", "other"].includes(gender)){
        throw new Error("Gender should be male, female or other | check from utils validation lavel validation");
    }

    // user email validation
    if(!email){
        throw new Error("Email is required | check from utils validation lavel validation");
    }
    else if(!validator.isEmail(email)){
        throw new Error("Invalid email | check from utils validation lavel validation");
    }

    //next();
}





module.exports = {
    signupDataValidation
}