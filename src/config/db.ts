import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_ATLAS_CONNECTION_STRING as string
    );
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.log("MongoDB connection Error", error);
    process.exit(1);
  }
};
