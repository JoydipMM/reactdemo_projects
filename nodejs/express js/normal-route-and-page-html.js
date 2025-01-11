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

app.get('/products', (req,resp)=>{
    const products = [
        {id:1, name: "product 1"}, {id:2, name: "product 2"}, {id:3, name: "product 3"},
    ]
    resp.json(products);
})

// get single value
app.get('/product/:id', (req,resp)=>{
    const productID = parseInt(req.params.id)
    const products = [
        {id:1, name: "product 1"}, {id:2, name: "product 2"}, {id:3, name: "product 3"},
    ]
    const singleProduct = products.find((product)=> { return(product.id === productID) })
    if(singleProduct){
        resp.json(singleProduct);
    }else{
        resp.status(404).send("product not found")
    }
})

app.listen(5000);