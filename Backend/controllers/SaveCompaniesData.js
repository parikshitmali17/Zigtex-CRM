import company from "../model/Companies.js";
const SaveCompaniesData=async(req,res)=>{
    try{
        const {name, website, Created_By, Account_Owner, No_Of_Employees, Linkdlen_profile, Address,SalesPipeline, } = req.body;
// console.log(req.body);
        if(!name || !website || !Created_By || !No_Of_Employees || !Address){
            res.status(400).json({error: "All fields are required"});
            return;
        }

        const Company = new company({
            name,
            website,
            Created_By,
            Account_Owner,
            No_Of_Employees,
            Linkdlen_profile,
            Address,
            SalesPipeline: {
                MeetingsScheduled: SalesPipeline.MeetingScheduled || false,
                Qualification: SalesPipeline.Qualification || false, 
                ProposalSent: SalesPipeline.ProposalSent || false,
                OnNegotiation: SalesPipeline.OnNegotiation || false,
                ClosedWon: SalesPipeline.ClosedWon || false,
                ClosedLost: SalesPipeline.ClosedLost || false,  

                MeetingsScheduledValue: SalesPipeline.MettingsScheduledValue || 0,
                QualificationValue: SalesPipeline.QualificationValue || 0,
                ProposalSentValue: SalesPipeline.ProposalSentValue || 0,
                OnNegotiationValue: SalesPipeline.OnNegotiationValue || 0,
                ClosedWonValue: SalesPipeline.ClosedWonValue || 0,

              WeightValuePercentageMeetingScheduled: SalesPipeline.WeightValuePercentageMeetingScheduled || 0,
              WeightValuePercentageQualification: SalesPipeline.WeightValuePercentageQualification || 0,
              WeightValuePercentageProposalSent: SalesPipeline.WeightValuePercentageProposalSent || 0,
              WeightValuePercentageOnNegotiation: SalesPipeline.WeightValuePercentageOnNegotiation || 0,
            }     
        });

        await Company.save();
        res.status(201).json({message: "Company data saved successfully", company: Company});
    }catch(error){
        console.error("Error saving company data:", error);
        res.status(500).json({error: "Internal server error"});
    }
}

export default SaveCompaniesData;