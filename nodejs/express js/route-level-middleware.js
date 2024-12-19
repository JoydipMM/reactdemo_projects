const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.join(__dirname,"public");

// Set EJS as the template engine
app.set('view engine','ejs')


// create middleware
const routeMiddleware = (req, resp, next) => {
    console.log("middleware start working");

    if(!req.query.age){
        resp.send("<h2>Please Provide Age</h2>")
    }else if(req.query.age < 18){
        resp.send("<h2>You are not eligible</h2>")
    }else{
        next();
    }
} 

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