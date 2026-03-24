const mongoose = require("mongoose");

const connectionSchema = mongoose.Schema({
    fromuserid:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    touserid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    status: {
        type: String,
        required: true,
        enum: ["interested", "ignored", "accepted", "rejected", "unfriend", "blocked"]
    }
}, {  timestamps: true });

const connectionModel = mongoose.models.Connection || mongoose.model("Connection", connectionSchema);
module.exports = connectionModel;