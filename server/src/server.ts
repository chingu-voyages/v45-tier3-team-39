import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import { json, urlencoded } from 'express';
import { connectDB } from './db';
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const app = express();

import restaurantRouter from './routes/restaurant';
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

dotenv.config({ path: './config/.env' });


const runServer = async () => {
  try {
    await connectDB();

    app.use(json());
    app.use(urlencoded({ extended: true }));

    app.use(cors());
    app.use(logger('dev'));
    
    app.use('/api/restaurant', restaurantRouter);
    app.use('/api/users', userRoutes);
    app.use('/api/categories', categoryRoutes);

    app.use(notFound);
    app.use(errorHandler);

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
