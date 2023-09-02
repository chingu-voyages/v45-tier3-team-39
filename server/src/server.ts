import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
const cors = require('cors')
import { connectDB } from './db';
const { notFound, errorHandler } = require('./middleware/errorHandler')
const app = express();


dotenv.config({ path: './config/.env' });

app.use(express.json())


app.use(express.urlencoded({ extended: true }));
const userRoutes = require('./routes/userRoutes.js');
const categoryRoutes = require('./routes/categoryRoutes');
const menuRoutes = require('./routes/menuRoutes');

const runServer = async () => {
  try {
    await connectDB();

    app.get('/', (_req, res) => res.send('Hello from the server! 🚀🚀🚀'));

    app.use(cors())
    app.use(logger('dev'));
    app.use("/api/users", userRoutes);
    app.use("/api/categories", categoryRoutes);
    app.use("/api/menu-items", menuRoutes);

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
