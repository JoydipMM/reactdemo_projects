const express = require('express');
const app = express();

app.get('', (req, resp)=>{
    resp.send("<h2>this is Home Page</h2>");
})

app.get('/about', (req, resp)=>{
    resp.send("<h2>this is About Page</h2>");
})

app.get('/contact', (req, resp)=>{
    resp.send("<h2>this is Contact Page</h2>");
})

app.listen(5000);