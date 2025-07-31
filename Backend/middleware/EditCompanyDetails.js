
import company from "../model/Companies.js";

const EditCompanyDetails = async (req, res) => {
    try {
        const { id } = req.params; // Get the company ID from the request parameters
        const {  name, website, Created_By, Account_Owner, No_Of_Employees, Linkdlen_profile, Address } = req.body;

        const updatedCompany = await company.findByIdAndUpdate(
            id,
            {
                name,
                website,
                Created_By,
                Account_Owner,
                No_Of_Employees,
                Linkdlen_profile,
                Address
            },
            { new: true } // Return the updated document
        );

        if (!updatedCompany) {
            return res.status(404).json({ error: "Company not found" });
        }

        res.status(200).json({ message: "Company updated successfully", company: updatedCompany });
    } catch (error) {
        console.error("Error updating company:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default EditCompanyDetails;
