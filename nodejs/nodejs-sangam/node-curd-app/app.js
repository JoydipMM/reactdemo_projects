const express = require('express');
const app = express();
const port = 4000;

const data = [
    {id:1, name:"name1"},
    {id:2, name:"name2"},
    {id:3, name:"name3"},
    {id:4, name:"name4"},
    {id:5, name:"name5"},
]

const demoMiddleware = (req, res, next) => {
    console.log("demo middleware");
    console.log(`method: ${req.method} url: ${req.url} date: ${new Date().toString()}`);
    next();
}

app.use(express.json());
app.use(demoMiddleware);

app.get("/", (req,res)=>{
  res.json({title:"Home"});  
});
app.get("/about", (req,res)=>{
  res.json({title:"About"});  
});
app.get("/products", (req,res)=>{
  res.json({title:"Products", data:data});  
});
app.get("/products/:id", (req,res)=>{
    const filteredProduct = data.find((product) => product.id == req.params.id);
  res.json({title:"Products", data:filteredProduct});  
});



app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})