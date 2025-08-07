import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  website: { type: String, required: true },    
  // Created_By:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  Created_At: { type: Date, default: Date.now },
  Created_By: { type: String, required: true },
  // Created_By:{type :mongoose.Schema.Types.ObjectId,ref:"ComapaniesPOC", required: true}, 
  
// Account_Owner: { type: String, required: true },
  // Account_Owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  No_Of_Employees: { type: Number, required: true, min: 1 },
  Linkdlen_profile: { type: String },
  Address: { type: String, required: true },
  SalesPipeline:{
    MeetingScheduled: { type: Boolean, default: false },
    Qualification: { type: Boolean, default:false },
    ProposalSent: { type: Boolean, default: false },
    OnNegotiation: { type: Boolean, default: false },
    ClosedWon: { type: Boolean, default: false },
    ClosedLost: { type: Boolean, default: false },

    MeetingsScheduledValue: { type: Number, default: 0 },
    QualificationValue: { type: Number, default: 0 },
    ProposalSentValue: { type: Number, default: 0 },
    OnNegotiationValue: { type: Number, default: 0 },
 ClosedWonValue: { type: Number, default: 0 },

    WeightValuePercentageMeetingScheduled: { type: Number, min:0, max:100, default: 0 }, // Percentage value for weightage
    WeightValuePercentageQualification: { type: Number, min:0, max:100, default: 0 }, // Percentage value for weightage
    WeightValuePercentageProposalSent: { type: Number, min:0, max:100, default: 0 }, // Percentage value for weightage
    WeightValuePercentageOnNegotiation: { type: Number, min:0, max:100, default: 0 }, // Percentage value for weightage
    
  }  
})

  const company=mongoose.model("Company", companySchema);
  export default company;
  
