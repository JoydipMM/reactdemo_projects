const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        if(connection){
            console.log("Database connected successfully");
        }
    }catch(error){
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;