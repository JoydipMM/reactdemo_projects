require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI+process.env.MONOGODB_DB_NAME);
    }catch(error){
        console.log(error);
    }
}
module.exports = connectDB;