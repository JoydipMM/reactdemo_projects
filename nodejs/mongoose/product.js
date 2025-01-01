const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    email: String,
});

module.exports = mongoose.model('products', ProductSchema);