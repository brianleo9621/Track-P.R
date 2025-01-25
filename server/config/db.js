const mongoose = require('mongoose');

// Check if the MONGO_URI environment variable is correctly loaded
console.log('MongoDB URI:', process.env.MONGO_URI ? 'Loaded' : 'Not Loaded');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined. Please check your .env file.');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
