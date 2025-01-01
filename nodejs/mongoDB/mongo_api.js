const express = require("express");
const mongodb = require("mongodb"); // use for get ObjectId via params from mongodb collection
const productCollection = require("./mongo_connection_practise");
const app = express();

// for check that json data is comming or not from postman
app.use(express.json());


app.get('/', async (req, resp)=>{
    let data = await productCollection();
    //console.log(data);
    data = await data.find({}).toArray();
    //console.log(data);
    resp.send(data);
})

app.post('/', async (req, resp) => {
    //console.log(req.body);
    let data = await productCollection();
    data = await data.insertOne(req.body);
    //data = req.body;
    resp.send(data);
});

app.put('/:name', async(req,resp)=>{
    let data = await productCollection();
    data = await data.updateOne({ name: req.params.name},{ $set: req.body });
    resp.send({ result: "updated"});
})

app.delete('/:id', async(req,resp)=>{
    let data = await productCollection();
    data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id)});
    resp.send({ result: "updated"});
})


app.listen(5000);