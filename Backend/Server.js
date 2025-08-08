
import express from "express"
import dotenv from "dotenv";
dotenv.config();
import { router as AIEmailgenerationRouter} from "./AI/EmailGeneration.js";

import { connectDB } from "./config/db.js";
import SaveCompaniesData from "./controllers/SaveCompaniesData.js";
import  GetAllCompaniesData  from "./controllers/GetAllComapniesData.js";
import EditCompanyDetails from "./controllers/EditCompanyDetails.js";
import SaveCompaniesPOCData from "./controllers/SaveCompaniesPOCData.js";
import GetAllCompaniesPOCData from "./controllers/GetAllPOCData.js";
import EditCompanyPOCData from "./controllers/EditPOCData.js";
import DeleteCompaniesPOCData from "./controllers/DeleteCompaniesPOCData.js";
import DeleteCompaniesDetails from "./controllers/DeleteCompaniesDetails.js";
import getPOCWithCompanies from "./controllers/GetPOCWithCompanies.js";
import SaveTaskDetails from "./controllers/SaveTaskDetails.js";
import GetAllTaskDetails from "./controllers/GetAllTaskDetails.js";
import EditTaskDetails from "./controllers/EditTaskDetails.js";
import DeleteTask from "./controllers/DeleteTask.js";
import GetSalesPipeline from "./controllers/GetSalesPipeline.js";
import generateAuthUrl from "./gmail/genrateOauthurl.js";
import handleOauthCallback from "./gmail/handleOauthcallback.js";




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


//Endpooints for tasks
app.post('/api/SaveTaskDetails', SaveTaskDetails); // Endpoint to save task details
app.get('/api/GetAllTaskDetails', GetAllTaskDetails); // Endpoint to get all task details
app.put('/api/EditTaskDetails/:id', EditTaskDetails); // Endpoint to edit task details
app.delete('/api/DeleteTask/:id', DeleteTask); // Endpoint to delete task details

// Endpoint to get Sales Pipeline Data
app.get('/api/GetSalesPipeline/', GetSalesPipeline); // Endpoint to get sales pipeline data



// AI Email Generation Endpoint
app.use('/', AIEmailgenerationRouter);   // AI Email Generation Router



// Gmail OAuth Endpoints

app.get('/api/gmail/generateAuthUrl', generateAuthUrl); // Endpoint to generate Gmail OAuth URL
app.get('/api/gmail/callback', handleOauthCallback); // Endpoint to handle Gmail OAuth callback







app.listen(3000,()=>{
    console.log('Server is running on port 3000');})


