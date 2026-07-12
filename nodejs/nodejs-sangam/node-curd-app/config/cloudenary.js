const cloudenary = require('cloudinary').v2;

cloudenary.config({
    cloud_name: process.env.CLOUDENARY_CLOUD_NAME,
    api_key: process.env.CLOUDENARY_API_KEY,
    api_secret: process.env.CLOUDENARY_API_SECRET,
    //secure: true
});


module.exports = cloudenary