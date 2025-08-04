
import express from "express"
import dotenv from "dotenv";
dotenv.config();
import { router as AIEmailgenerationRouter} from "./AI/EmailGeneration.js";

import { connectDB } from "./config/db.js";
import SaveCompaniesData from "./middleware/SaveCompaniesData.js";
import  GetAllCompaniesData  from "./middleware/GetAllComapniesData.js";
import EditCompanyDetails from "./middleware/EditCompanyDetails.js";
import SaveCompaniesPOCData from "./middleware/SaveCompaniesPOCData.js";
import GetAllCompaniesPOCData from "./middleware/GetAllPOCData.js";
import EditCompanyPOCData from "./middleware/EditPOCData.js";
import DeleteCompaniesPOCData from "./middleware/DeleteCompaniesPOCData.js";
import DeleteCompaniesDetails from "./middleware/DeleteCompaniesDetails.js";
import getPOCWithCompanies from "./middleware/GetPOCWithCompanies.js";



connectDB(); // Connect to MongoDB


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Companies Details Endpoints
app.put("/api/EditCompanyDetails/:id", EditCompanyDetails); // Endpoint to edit company details
app.post('/api/SaveCompaniesData', SaveCompaniesData); // Endpoint to save company data
app.get('/api/GetAllCompaniesData', GetAllCompaniesData); // Endpoint to get all companies data
app.delete('/api/DeleteCompaniesDetails/:id', DeleteCompaniesDetails); // Endpoint to delete company details

// app.get("/api/GetPOCWithCompanies/:id", getPOCWithCompanies); // Endpoint to get POC with companies

// Companies POC Details Endpoints
app.post("/api/SaveCompaniesPOCData", SaveCompaniesPOCData); // Endpoint to save POC data
app.get("/api/GetAllCompaniesPOCData", GetAllCompaniesPOCData); // Endpoint to get all POC data
app.put("/api/EditCompanyPOCData/:id", EditCompanyPOCData); // Endpoint to edit POC data
app.delete("/api/DeleteCompaniesPOCData/:id", DeleteCompaniesPOCData); // Endpoint to delete POC data


//
// AI Email Generation Endpoint
app.use('/', AIEmailgenerationRouter);   // AI Email Generation Router











app.listen(3000,()=>{
    console.log('Server is running on port 3000');})


