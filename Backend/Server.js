// const express = require('express');
import express from "express"
import dotenv from "dotenv";
dotenv.config();
import { router as AIEmailgenerationRouter} from "./AI/EmailGeneration.js";

import { connectDB } from "./config.js/db.js";
import SaveCompaniesData from "./middleware/SaveCompaniesData.js";
import  GetAllCompaniesData  from "./middleware/GetAllComapniesData.js";
import EditCompanyDetails from "./middleware/EditCompanyDetails.js";
import SaveCompaniesPOCData from "./middleware/SaveCompaniesPOCData.js";
import GetAllCompaniesPOCData from "./middleware/GetAllPOCData.js";



connectDB(); // Connect to MongoDB


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.put("/api/EditCompanyDetails/:id", EditCompanyDetails); // Endpoint to edit company details
app.post('/api/SaveCompaniesData', SaveCompaniesData); // Endpoint to save company data
app.get('/api/GetAllCompaniesData', GetAllCompaniesData); // Endpoint to get all companies data
app.use('/', AIEmailgenerationRouter);   // AI Email Generation Router
app.post("/api/SaveCompaniesPOCData", SaveCompaniesPOCData); // Endpoint to save POC data
app.get("/api/GetAllCompaniesPOCData", GetAllCompaniesPOCData); // Endpoint to get all POC data





app.listen(3000,()=>{
    console.log('Server is running on port 3000');})


