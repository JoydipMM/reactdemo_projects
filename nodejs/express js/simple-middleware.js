const express = require("express");
const app = express();

const loggerMiddleware = (req,resp,next) =>{

    const timestamp = new Date().toISOString();
    console.log(`${timestamp} from ${req.method} to ${req.url}`);
    next();
}

app.use(loggerMiddleware);


app.get('', (req, resp)=>{
    resp.send("<h2>this is Home Page</h2>");
})

app.get('/about', (req, resp)=>{
    resp.send("<h2>this is About Page</h2>");
})

app.listen(5000);