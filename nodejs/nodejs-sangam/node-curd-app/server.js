require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require("./database/db");
const bookRouter = require("./routes/book-route");
const authRouter = require("./routes/auth-route");
const homeRouter = require("./routes/home-route");
const adminRouter = require("./routes/admin-route");
const PORT = process.env.PORT || 4000;

// connect DB
connectDB();

// middleware
app.use(express.json());
app.use("/api/books", bookRouter);
app.use("/api/auth", authRouter);
app.use("/api/home", homeRouter);
app.use("/api/admin", adminRouter);



app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})