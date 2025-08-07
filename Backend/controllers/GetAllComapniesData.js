     import company from "../model/Companies.js";

     const GetAllCompaniesData = async (req, res) => {
    try {
        const companies = await company.find({});
        if (companies.length === 0) {
            return res.status(404).json({ message: "No companies found" });
        }
        res.status(200).json(companies);
    } catch (error) {
        console.error("Error fetching companies data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


export default GetAllCompaniesData;
