// use require to import mongoose and assign it to a variable
const mongoose = require('mongoose');

// now to connect database we use a async function because we have to wait for the database to connect
const connectDB = async () => {
    try {
        await mongoose.connect("");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDB;

// this function will be called when the application starts and will connect to the database
/*
connectDB().then(()=>{
    console.log('Connected to MongoDB');
}).catch((error)=>{
    console.log(error);
})
*/