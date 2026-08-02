// utils/validation.js

// 01. import joi library
const joi = require("joi");

// 02. Define a validation schema for user registration
const validateRegistration = (data) => {
    const schema = joi.object({
        firstName:joi.string().min(2).max(30),
        lastName:joi.string().min(2).max(30),
        username:joi.string().min(3).max(30).required(),
        email:joi.string().email().required(),
        password:joi.string().min(6).required(),
    });

    // 03. Validate the data against the schema
    return schema.validate(data);
}

// 04. export the validation function for use in other modules
module.exports = {
    validateRegistration
}