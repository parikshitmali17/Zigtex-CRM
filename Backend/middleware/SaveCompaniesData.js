import company from "../model/Companies.js";
const SaveCompaniesData=async(req,res)=>{
    try{
        const {name, website, Created_By, Account_Owner, No_Of_Employees, Linkdlen_profile, Address} = req.body;

        if(!name || !website || !Created_By || !Account_Owner || !No_Of_Employees || !Address){
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
            Address
        });

        await Company.save();
        res.status(201).json({message: "Company data saved successfully", company: Company});
    }catch(error){
        console.error("Error saving company data:", error);
        res.status(500).json({error: "Internal server error"});
    }
}

export default SaveCompaniesData;