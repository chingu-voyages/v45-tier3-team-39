import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import { json, urlencoded } from 'express';
import { connectDB } from './db';
import menuRouter from './routes/menu';
import restaurantRouter from './routes/restaurant';

const app = express();

dotenv.config({ path: './config/.env' });

const runServer = async () => {
  try {
    await connectDB();

    app.use(urlencoded({ extended: true }));
    app.use(json());

    app.use('/menu', menuRouter);
    app.use('/restaurant', restaurantRouter);

    app.use(logger('dev'));

    const PORT = process.env.PORT || 2023;

    app.listen(PORT, () => {
      console.log(
        `Server is running in ${process.env.NODE_ENV} mode & listening on PORT ${PORT}`
      );
    });
  } catch (error) {
    console.error('Server Error:', error);
  }
};

runServer();
