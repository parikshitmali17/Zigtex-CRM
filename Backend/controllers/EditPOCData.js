import ComapniesPOCModel from '../model/ComapniesPOC.js';
const EditCompanyPOCData = async (req, res) => {
    try {
        const { id } = req.params; // Get the POC ID from the request parameters
        const { name, Email, createdByTeamLeadOrCEO, companiesName, contactNo, City, jobTitle, LikdlenProfile, TwitterProfileX } = req.body;    
        const updatedPOC = await ComapniesPOCModel.findByIdAndUpdate(
            id,
           { name,
            Email,
            createdByTeamLeadOrCEO,
            companiesName, 
            contactNo,
            City,
            jobTitle,
            LikdlenProfile,
            TwitterProfileX},
            { new: true } // Return the updated document
        );
        if (!updatedPOC) {
            return res.status(404).json({ error: "Failed to Update the Details Please try again" });
        }
        res.status(200).json({ message: "POC updated successfully", poc: updatedPOC });
    } catch (error) {
        console.error("Error updating POC:", error);
        res.status(500).json({ error: "Internal server error" });
    }

};

export default EditCompanyPOCData;