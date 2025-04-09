import mongoose from "mongoose";
let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_CONNECTION, {
      dbName: "tour_DB", 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("✅ MongoDB connected:", dbConnection.connection.host);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    throw error;
  }
};