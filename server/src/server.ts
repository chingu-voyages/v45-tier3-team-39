import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { connectDB } from './db';
import { swaggerSpec } from '../swagger';
import { json, urlencoded } from 'express';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorHandler';
import restaurantRouter from './routes/restaurantRoutes';
import userRoutes from './routes/userRoutes';
import categoryRoutes from './routes/categoryRoutes';
import menuRoutes from './routes/menuRoutes';
import orderRouter from './routes/orderRoutes';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:1234',
  })
);
dotenv.config({ path: `${__dirname}/config/.env` });

const runServer = async () => {
  try {
    await connectDB();

    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(logger('dev'));

    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.use('/api/restaurant', restaurantRouter);
    app.use('/api/user', userRoutes);
    app.use('/api/categories', categoryRoutes);
    app.use('/api/menu-items', menuRoutes);
    app.use('/api/orders', orderRouter);

    app.get('/', (_, res) => {
      res.send('API is running...');
    });

    app.use(notFound);
    app.use(errorHandler);

    const PORT = process.env.PORT || 2023;

    app.listen(PORT, () => {
      console.log(
        `Server is running in ${process.env.NODE_ENV} mode & listening on PORT ${PORT}`,
        `http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error('Server Error:', error);
  }
};

runServer();
