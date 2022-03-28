import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected.');
    return;
  }
  mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) throw err;
    console.log('Connected to mongodb.');
  });
};

export default connectDB;
