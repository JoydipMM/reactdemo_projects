import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://joydipsarkar01:QLkDgd8HQtlRs7AH@foodapp-test.bkuh9.mongodb.net/food-app').then(() => console.log("DB Connected"));
}