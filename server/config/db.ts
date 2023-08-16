import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const db_url = process.env.DB_STRING || '';
    const conn = await mongoose.connect(db_url!);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } 
  catch (error) {
    console.log(error);
    process.exit(1);
  }
}