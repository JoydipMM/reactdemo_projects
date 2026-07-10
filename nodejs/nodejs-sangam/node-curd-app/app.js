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
    if(!filteredProduct){
        return res.status(404).json({message:"Product not found"});
    }else{
        return res.json({title:"Products", data:filteredProduct});  
    }
});
app.post("/add", (req,res)=>{
  const newProduct = {
    id: data.length + 1,
    //name: req.body.name // real projct it will be req.body
    name: `name${data.length + 1}`
  } 
  data.push(newProduct);
  res.json({
    data:newProduct,
    message: "New product added successfully"
  })

});
app.put("/update/:id", (req,res)=>{
    const updatedProduct = data.find((product) => product.id == req.params.id);
    if(!updatedProduct){
        return res.status(404).json({message:"Product not found"});
    }else{
         updatedProduct.name =  `${updatedProduct.name} updated`;
         return res.json({ status: 202, message:"Products updated", data: updatedProduct});
    }
});
app.delete("/delete/:id", (req,res)=>{
    const deletedProduct = data.find((product) => product.id == req.params.id);
    if(!deletedProduct){
        return res.status(404).json({message:"Product not found"});
    }else{
        data.splice(data.indexOf(deletedProduct), 1);
        return res.json({title:"Products", data});  
    }
});



app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})