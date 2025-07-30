import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  website: { type: String, required: true },    
  // Created_By:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  Created_At: { type: Date, default: Date.now },
  Created_By: { type: String, required: true },
Account_Owner: { type: String, required: true },
  // Account_Owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  No_Of_Employees: { type: Number, required: true, min: 1 },
  Linkdlen_profile: { type: String },
  Address: { type: String, required: true }})

  const company=mongoose.model("Company", companySchema);
  export default company;
