const mongoose = require('mongoose');

const connectToDB = async()=>{
    try{
        await mongoose.connect(' ');
        console.log("mongodb connected successfully")
    }catch(error){
        console.log("Database error", error);
        process.exit(1)
    }
}

module.exports = connectToDB;

