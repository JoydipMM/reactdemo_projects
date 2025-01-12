const mongoose = require('mongoose');

const connectToDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://joydipsarkar01:joydip1234@cluster0.wxcxo.mongodb.net/books_DB');
        console.log("mongodb connected successfully")
    }catch(error){
        console.log("Database error", error);
        process.exit(1)
    }
}

module.exports = connectToDB;

