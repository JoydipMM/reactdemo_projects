const express = require('express');
const app = express();
const routeMiddleware = require('./middleware')
const path = require("path");
const publicPath = path.join(__dirname,"public");

// Set EJS as the template engine
app.set('view engine','ejs')

app.get('', (req,resp)=>{
    const data = {
        name: 'Rahul Roy',
        email: 'rahul@gmail.com',
        skills: ['html', 'css', 'javascript', 'node js']
    }
    resp.render('home', {data});
});

app.get('/aboutus', routeMiddleware, (req,resp)=>{
    resp.render('about');
});

app.get('/contact-us', (req,resp)=>{
    resp.render('contact');
});

app.get('*', (req,resp)=>{
    resp.render('404');
});


app.listen(5000);