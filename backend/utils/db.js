const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("{--Replace this with your mongoDB string--}/full_scale_erp");
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
