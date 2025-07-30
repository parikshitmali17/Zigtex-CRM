// const express = require('express');
import express from "express"
import { router as AIEmailgenerationRouter} from "./AI/EmailGeneration.js";
import dotenv from "dotenv";
import { connectDB } from "./config.js/db.js";


dotenv.config();
connectDB(); // Connect to MongoDB


const app = express();

app.use(express.json());
app.use('/', AIEmailgenerationRouter);







app.listen(3000,()=>{
    console.log('Server is running on port 3000');})


