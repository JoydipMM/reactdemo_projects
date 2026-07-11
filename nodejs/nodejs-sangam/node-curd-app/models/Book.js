const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Book tile is required"],
        trim: true,
        maxLength: [100, "Book title can not more than 100 charecters"]
    },
    author:{
        type: String,
        required: [true, "Author name required"],
    },
    year:{
        type: Number,
        required:[true, "Publish year required."],
        min: [1000, "Year must be bove 1000 year"],
        max: [new Date().getFullYear(), "Year cannot be in future"]
    },
    price:{
        type: Number,
        required: true,
    },
    isActive:{
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

module.exports = mongoose.models.Books || mongoose.model("Books", bookSchema);
/* Note:
1. model name always plural and first letter capital.
2. schema name always singular 
3. collection name always plural and all in small letter
*/