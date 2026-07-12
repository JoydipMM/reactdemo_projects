const mongoose = require('mongoose');
const mongodb_url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.42ucz5w.mongodb.net/${process.env.MONGODB_DATABASE}`

const connectDB = async function (){
    try{
        const connect = await mongoose.connect(mongodb_url);
        console.log(`${connect.connection.db.databaseName} database connected successfully`);
    }catch(err){
        console.log("Connection failed. Error:", err);
        process.exit(1);
    }
}

module.exports = connectDB;