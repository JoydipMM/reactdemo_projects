import mongoose from "mongoose";

export const connectDB = async () =>{

    // 0 = disconnected
    // 1 = connected
    // 2 = connecting
    // 3 = disconnecting
    if (mongoose.connection.readyState === 1) {
        console.log("✅ Already connected to the database");
        return;
      }
    
      try {
        await mongoose.connect(process.env.MONGODB_CONNECTION, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    
        console.log("✅ MongoDB connected");
      } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
      }
}