import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { connectDB } from './db';
import userRoutes from './routes/userRoutes';
import { swaggerSpec } from '../swagger';
import { json, urlencoded } from 'express';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorHandler';
import restaurantRouter from './routes/restaurant';
import categoryRoutes from './routes/categoryRoutes';

const app = express();
dotenv.config({ path: './config/.env' });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/user', userRoutes);

app.use(express.urlencoded({ extended: true }));

const runServer = async () => {
  try {
    await connectDB();

    app.use(json());
    app.use(urlencoded({ extended: true }));

    app.use(cors());
    app.use(logger('dev'));

    app.get('/', (_, res) => {
      res.send('API is running...');
    });

    app.use('/api/restaurant', restaurantRouter);
    app.use('/api/users', userRoutes);
    app.use('/api/categories', categoryRoutes);

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
