const joi = require("joi");

const validatePost = (data) => {
    const schema = joi.object({
        title:joi.string().min(5).max(100).required(),
        content:joi.string().min(5).max(1000).required(),
        mediaIds:joi.array().items(joi.string()),
    });

    return schema.validate(data);
}



module.exports = {
    validatePost
}