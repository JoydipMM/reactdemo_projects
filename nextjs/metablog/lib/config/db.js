import mongoose, { connect } from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://joydipsarkar01:jKHwAqP2oFeecomc@cluster0.cgkaa.mongodb.net/metablogDB");
    console.log("DB connected");
}

export default connectDB;