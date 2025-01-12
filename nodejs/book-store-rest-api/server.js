require('dotenv').config();
const connectToDB = require('./database/db')
const express = require('express');
const bookRoutes = require('./routes/book-routes');
const app = express();
const PORT = process.env.PORT || 5000;

//connect to our database
connectToDB();

//middleware
app.use(express.json())

// routes
app.use('/api/books', bookRoutes)






app.listen(PORT, ()=>{ console.log(`Server is running on port ${PORT}`) })