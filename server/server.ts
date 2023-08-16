import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import mongoose from 'mongoose';

const connectDB = require('./config/db')
const app = express();

dotenv.config({path: './config/.env'});

connectDB();

app.get('/', (_req, res) => res.send('Hello from the server! 🚀🚀🚀'));

app.use(logger('dev'));

const PORT = process.env.PORT || 2023;

app.listen(PORT, () => {
    console.log(`Sever is running in ${process.env.NODE_ENV} & listening on PORT ${PORT}`);
});

