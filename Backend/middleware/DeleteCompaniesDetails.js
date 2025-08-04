import companiesDetails from "../model/Companies.js";
import mongoose from "mongoose";

const DeleteCompaniesDetails = async (req, res) => {
    try {
        const { id } = req.params; // Get the POC ID from the request parameters
        console.log("Deleting Copanies Details with ID:", id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Company ID" });
    }

   
        const deletedCompany = await companiesDetails.findByIdAndDelete(id);
        
        if (!deletedCompany) {
            return res.status(404).json({ error: "Company Not Found" });
        }   
        res.status(200).json({ message: "Company deleted successfully", company: deletedCompany });
    } catch (error) {
        console.error("Error deleting company:", error);
        res.status(500).json({ error: "Internal server error" });
    }

}

export default DeleteCompaniesDetails;