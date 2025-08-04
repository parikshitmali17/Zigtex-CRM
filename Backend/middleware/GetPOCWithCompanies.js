// controllers/getPOCWithCompanies.js
import ComapniesPOCModel from "../model/ComapniesPOC.js";
// import ComapniesPOCModel from "../model/ComapniesPOC.js";
// import Company from "../model/Companies.js";
import Company from "../model/Companies.js";

const getPOCWithCompanies = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the POC by ID
    const poc = await ComapniesPOCModel.findById(id);
    if (!poc) {
      return res.status(404).json({ message: "POC not found" });
    }

    // Find all companies created by this POC
    const companies = await Company.find({ Created_By: id });

    return res.status(200).json({
      poc,
      createdCompanies: companies
    });
  } catch (error) {
    console.error("Error fetching POC with companies:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export default getPOCWithCompanies;
