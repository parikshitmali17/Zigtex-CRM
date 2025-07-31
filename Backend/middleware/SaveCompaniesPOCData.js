import ComapniesPOCModel from "../model/ComapniesPOC.js";

const CompaniesPOCData = async (req, res) => {
    try {
        const { name, Email, createdByTeamLeadOrCEO, companiesName, contactNo, City, jobTitle, LikdlenProfile, TwitterProfileX } = req.body;

        if (!name || !Email || !createdByTeamLeadOrCEO || !companiesName || !contactNo || !City || !jobTitle || !LikdlenProfile || !TwitterProfileX) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newPOC = new ComapniesPOCModel({
            name,
            Email,
            createdByTeamLeadOrCEO,
            companiesName,
            contactNo,
            City,
            jobTitle,
            LikdlenProfile,
            TwitterProfileX
        });

        await newPOC.save();
        res.status(201).json({ message: "POC data saved successfully", poc: newPOC });
    } catch (error) {
        console.error("Error saving POC data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export default CompaniesPOCData;