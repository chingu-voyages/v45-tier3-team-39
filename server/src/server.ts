import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { connectDB } from './db';
import userRoutes from './routes/userRoutes';
import { swaggerSpec } from '../swagger';

const app = express();

dotenv.config({ path: './config/.env' });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/user', userRoutes);

const runServer = async () => {
  try {
    await connectDB();

    app.get('/', (_req, res) => res.send('Hello from the server! 🚀🚀🚀'));

    app.use(logger('dev'));

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
