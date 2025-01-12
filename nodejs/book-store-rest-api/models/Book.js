const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        require: [true, "Book Title is required"],
        trim: true,
        maxLength: [100, "Book Title can not be more than 100 characters"]
    },
    author : {
        type : String,
        require: [true, "Author name is required"],
        trim: true,
    },
    year: {
        type : Number,
        require: [true, "Publication data required"],
        min: [1000, 'Year must be atleast 1000'],
        max: [ new Date().getFullYear(), 'Year can not be future year'],
    },
    createdAt: {
        type : Date,
        default : Date.now,
    }
});

module.exports = mongoose.model('Book', bookSchema);