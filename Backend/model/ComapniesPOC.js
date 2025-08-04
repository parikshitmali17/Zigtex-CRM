import mongoose from "mongoose";



const ComapniesPOC = new mongoose.Schema({
  name: { type: String, required: true },
  Email: { type: String, required: true },
  createdByTeamLeadOrCEO: { type: String, required: true }, 
    companiesName: { type: String, required: true }, 
    contactNo:{type: Number, required: true},
    createdAt: { type: Date, default: Date.now },
    City: { type: String, required: true },
    jobTitle: { type: String, required: true },
    LikdlenProfile: { type: String, required: true },
    TwitterProfileX: { type: String, required: false },

})

const ComapniesPOCModel = mongoose.model("ComapniesPOC", ComapniesPOC);
export default ComapniesPOCModel;
