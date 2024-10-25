import connectDB from './db/index.js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import express from "express";

const app = express();
connectDB()
.then(() => {
    // app.get("/", (req, res) => {
    //     res.send("Hello World");
    // })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


