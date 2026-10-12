// src/config/db.js
import mongoose from 'mongoose';
import config from './config.js'; // Import your configured object

const connectToDb = async () => {
  try {
    // Use the variable exported from config.js
    await mongoose.connect(config.mongoUri); 
    console.log("🚀 MongoDB connected successfully to:", config.mongoUri);
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    process.exit(1);
  }
};

export default connectToDb;
