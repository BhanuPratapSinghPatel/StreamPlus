import connectDB from './db/index.js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import express from "express";


connectDB();
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// app.listen(`${process.env.PORT}`, () => {
//     console.log('Server started on port `${process.env.PORT}`');
// });

