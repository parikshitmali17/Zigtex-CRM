import ComapniesPOCModel from "../model/ComapniesPOC.js";
const DeleteCompaniesPOCData = async (req, res) => {
    try {
        const { id } = req.params; // Get the POC ID from the request parameters
        console.log("Deleting POC with ID:", id);
        const deletedPOC = await ComapniesPOCModel.findByIdAndDelete(id);   
        if (!deletedPOC) {
            return res.status(404).json({ error: "POC Not Found" });
        }
        res.status(200).json({ message: "POC deleted successfully Follwing POC has been Deleted", poc: deletedPOC });
    } catch (error) {
        console.error("Error deleting POC:", error);
        res.status(500).json({ error: "Internal server error" });
    }

   
}

 export default DeleteCompaniesPOCData;