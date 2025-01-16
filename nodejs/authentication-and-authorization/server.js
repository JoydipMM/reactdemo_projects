require('dotenv').config();
const PORT = process.env.PORT;
const connectDB = require('./database/db');
const express = require('express');
const authRouters = require('./routers/auth-routes');
const homeRouters = require('./routers/home-routes');
const adminRouters = require('./routers/admin-routes');
const app = express();

// database connection
connectDB();

// middleware
app.use(express.json());

//routers
app.use('/api/auth', authRouters)
app.use('/api/home', homeRouters)
app.use('/api/admin', adminRouters)




// server listen
app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`);
});