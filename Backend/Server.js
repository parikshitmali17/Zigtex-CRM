// const express = require('express');
import express from "express"
const app = express();

app.use(express.json());

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";


app.post('/', async (req, res) => {
    console.log(req.body);
    const userInput = req.body.message; ;
    const ai = new GoogleGenAI({apiKey:dotenv.config().parsed.Gemeni_API_KEY});
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: userInput,
  });
  console.log(response.text);
  res.json({ reply: response.text });

})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');})


