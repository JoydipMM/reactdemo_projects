import mongoose, { connect } from "mongoose";

const connectDB = async () => {
    await mongoose.connect("");
    console.log("DB connected");
}

export default connectDB;