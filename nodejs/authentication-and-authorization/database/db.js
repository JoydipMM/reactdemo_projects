const mongoose = require('mongoose');

const connectDB = async () => {
    try{

        await mongoose.connect("mongodb+srv://joydipsarkar01:joydip1234@cluster0.wxcxo.mongodb.net/books_DB");
        console.log("MongoDB connected");

    }catch(error){
        console.log(error, "Database connection error !!!!")
    }
}

module.exports = connectDB;