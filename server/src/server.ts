import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import { connectDB } from './db';

const app = express();

dotenv.config({ path: './config/.env' });

const runServer = async () => {
  try {
    await connectDB();

    app.get('/', (_req, res) => res.send('Hello from the server! 🚀🚀🚀'));

    app.use(logger('dev'));

    const PORT = process.env.PORT || 2023;

    app.listen(PORT, () => {
      console.log(
        `Sever is running in ${process.env.NODE_ENV} mode & listening on PORT ${PORT}`
      );
    });
  } catch (error) {
    console.error('Server Error:', error);
  }
};

runServer();
