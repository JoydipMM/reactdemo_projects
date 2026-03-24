const validator = require('validator');


const signupDataValidation = (req) => {
    const {name, email, password, gender, age, skills } = req.body;

    const nameregex = /^[A-Za-z\s]+$/;

    if(!name){
        throw new Error("Name is required");
    }else if(name.length < 3 || name.length > 20){
        throw new Error("Name should be between 3 to 20 characters | check from utils validation lavel validation");
    }else if(!nameregex.test(name)){
        throw new Error("Name should not contain numbers or special characters");
    }

    if(!email){
        throw new Error("Email is required");
    }else if(!validator.isEmail(email)){
        throw new Error("Email is not valid");
    }

    if(!password){
        throw new Error("Password is required");
    }else if(password.length < 5 || password.length > 70){
        throw new Error("Password should be between 5 to 70 characters");
    }else if(!validator.isStrongPassword(password)){
        throw new Error("Password should be strong"); 
    }


    if(!gender){
        throw new Error("Gender is required");
    }else if(!["male", "female", "other"].includes(gender)){
        throw new Error("Gender should be male, female or other");
    }

    if(!age){
        throw new Error("Age is required");
    }else if(age < 18 || age > 100){
        throw new Error("Age should be between 18 to 100");
    }

    if(!skills){
        throw new Error("Skills is required");
    }

}


module.exports = {
    signupDataValidation
}