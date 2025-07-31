
import CompaniesPOCData from "../model/ComapniesPOC.js";


const GetAllCompaniesPOCData = async (req, res) => {
    try {
        const pocData = await CompaniesPOCData.find({});
        if (pocData.length === 0) {
            return res.status(404).json({ message: "No POC data found" });
        }
        res.status(200).json(pocData);
    } catch (error) {
        console.error("Error fetching POC data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export default GetAllCompaniesPOCData;
