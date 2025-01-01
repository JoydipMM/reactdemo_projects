const mongoose = require('mongoose');
const express = require("express");
const app = express();

mongoose.connect("mongodb://localhost:27017/nodejsDB");

const productSchema = mongoose.Schema({
    name: String,
    email: String,
});

const save = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({ name: "Raju Roy", email: "raju@gmail.com" });
    let result = await data.save();
    console.log(result);
}

// save();

const update = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.updateOne(
        { name: "rahul" },
        { $set: { name: "Rahul Bose" } }
    );
    console.log(data);

}

// update()


const deleteProduct = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.deleteOne({ name: "Raju Roy" });
    console.log(data);

}

// deleteProduct();


const findProduct = async () => {
    const productModel = mongoose.model('products', productSchema);
    // let data = await productModel.find({ name: "ganesh" });
    let data = await productModel.find();
    console.log(data);

}

// findProduct();


app.listen(5000);

