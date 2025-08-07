import company from "../model/Companies.js";

const GetSalesPipeline=async (req, res) => { 
    try {
        const { id } = req.params; // Get the company ID from the request parameters   

        const TotalMeetingsScheduleLost=await company.countDocuments({"SalesPipeline.TotalMeetingsSchedule":false}); // Count total leads
        const TotalMeetingsScheduleWon=await company.countDocuments({"SalesPipeline.MeetingScheduled":true});   
        const TotalQualificationLost=await company.countDocuments({"SalesPipeline.Qualification":false}); // Count total leads
        const TotalQualificationWon=await company.countDocuments({"SalesPipeline.Qualification":true}); // Count total leads
        const TotalProposalSentLost=await company.countDocuments({"SalesPipeline.ProposalSent":false}); // Count total leads
        const TotalProposalSentWon=await company.countDocuments({"SalesPipeline.ProposalSent":true}); // Count total leads
        const TotalOnNegotiationWon=await company.countDocuments({"SalesPipeline.OnNegotiation":true}); // Count total leads
        const TotalOnNegotiationLost=await company.countDocuments({"SalesPipeline.OnNegotiation":false}); // Count total leads
        const TotalClosedWon=await company.countDocuments({"SalesPipeline.ClosedWon":true}); // Count total leads
        const TotalClosedLost=await company.countDocuments({"SalesPipeline.ClosedLost":true}); // Count total leads

        const MeetingsScheduledValue=await company.aggregate([
            { $group: { _id: null, total: { $sum: "$SalesPipeline.MeetingsScheduledValue" } } },

        ]);
        const TotalMeetingsScheduledValue = MeetingsScheduledValue || 0;
        const QualificationValue=await company.aggregate([
            { $group: { _id: null, total: { $sum: "$SalesPipeline.QualificationValue" } } },
        ]);
        const TotalQualificationValue = QualificationValue || 0;
        const ProposalSentValue=await company.aggregate([
            { $group: { _id: null, total: { $sum: "$SalesPipeline.ProposalSentValue" } } },
        ]);
        const TotalProposalSentValue = ProposalSentValue || 0;
        const OnNegotiationValue=await company.aggregate([
            { $group: { _id: null, total: { $sum: "$SalesPipeline.OnNegotiationValue" } } },
        ]);
        const TotalOnNegotiationValue = OnNegotiationValue || 0;
        const ClosedWonValue=await company.aggregate([
            { $group: { _id: null, total: { $sum: "$SalesPipeline.ClosedWonValue" } } },
        ]);
        const TotalClosedWonValue = ClosedWonValue || 0;
        
    res.status(200).json({
            TotalMeetingsScheduleLost,
            TotalQualificationLost,
            TotalProposalSentLost,
            TotalOnNegotiationLost, 
            TotalClosedWon,
            TotalClosedLost,
            TotalLostMeetingsSchedulePercentage:(TotalMeetingsScheduleLost/(TotalMeetingsScheduleWon+TotalMeetingsScheduleLost)*100).toFixed(2),
            TotalLostQualificationPercentage:(TotalQualificationLost/(TotalQualificationWon +TotalQualificationLost)*100).toFixed(2),
            TotalLostProposalSentPercentage:(TotalProposalSentLost/(TotalProposalSentWon+TotalProposalSentLost)*100).toFixed(2),
            TotalLostOnNegotiationPercentage:(TotalOnNegotiationLost/(TotalOnNegotiationWon+TotalOnNegotiationLost)*100).toFixed(2),

        TotalMeetingsScheduledValue,
            TotalQualificationValue,
            TotalProposalSentValue,
            TotalOnNegotiationValue,
            TotalClosedWonValue,
        });

    } catch (error) {
        console.error("Error fetching sales pipeline data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default GetSalesPipeline;