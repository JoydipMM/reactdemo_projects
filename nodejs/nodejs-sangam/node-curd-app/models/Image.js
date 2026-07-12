const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: false
    },
    resource_type: {
        type: String,
        required: false
    },
    uploaded_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.models.Images || mongoose.model("Images", imageSchema);