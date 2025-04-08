import mongoose, { connect } from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.);
    console.log("DB connected");
}

export default connectDB;