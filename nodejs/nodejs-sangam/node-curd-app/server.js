require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require("./database/db");
const bookRouter = require("./routes/book-route")
const PORT = process.env.PORT || 4000;
const mongodb_url = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.42ucz5w.mongodb.net/${process.env.MONGODB_DATABASE}`;

// connect DB
connectDB();

// middleware
app.use(express.json());
app.use("/api/book", bookRouter)



app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})