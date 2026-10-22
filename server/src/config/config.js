// src/config/config.js
import 'dotenv/config'; // Ensures .env is loaded immediately

const config = {
  mongoUri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/snitch", 
  port: process.env.PORT || 5000,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
};

export default config;
