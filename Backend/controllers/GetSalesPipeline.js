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

        
       const WeightValuePercentageMeetingsScheduledArray= await company.find({},{_id: 0, name: 1,"SalesPipeline.WeightValuePercentageMeetingScheduled": 1});
        const WeightValuePercentageQualificationArray= await company.find({},{_id: 0, name: 1,"SalesPipeline.WeightValuePercentageQualification": 1});
        const WeightValuePercentageProposalSentArray= await company.find({},{_id: 0, name: 1,"SalesPipeline.WeightValuePercentageProposalSent": 1});
        const WeightValuePercentageOnNegotiationArray= await company.find({},{_id: 0, name: 1,"SalesPipeline.WeightValuePercentageOnNegotiation": 1});
        

        const WeightValuePercentageMeetingsScheduled = WeightValuePercentageMeetingsScheduledArray.reduce((acc, curr) => acc + (curr.SalesPipeline.WeightValuePercentageMeetingScheduled || 0), 0);
        const WeightValuePercentageQualification = WeightValuePercentageQualificationArray.reduce((acc, curr) => acc + (curr.SalesPipeline.WeightValuePercentageQualification || 0), 0);
        const WeightValuePercentageProposalSent = WeightValuePercentageProposalSentArray.reduce((acc, curr) => acc + (curr.SalesPipeline.WeightValuePercentageProposalSent || 0), 0);
        const WeightValuePercentageOnNegotiation = WeightValuePercentageOnNegotiationArray.reduce((acc, curr) => acc + (curr.SalesPipeline.WeightValuePercentageOnNegotiation || 0), 0);

        // console.log("WeightValueMeetingsScheduled", WeightValuePercentageMeetingsScheduled);

        // console.log("TotalMeetingsScheduledValue", TotalMeetingsScheduledValue[0].total);
        // console.log("WeightValuePercentageMeetingsScheduled", WeightValuePercentageMeetingsScheduled);


        const WeightValueMeetingsScheduled =TotalMeetingsScheduledValue[0].total*WeightValuePercentageMeetingsScheduled/100;
        const WeightValueQualification =TotalQualificationValue[0].total*WeightValuePercentageQualification/100;
        const WeightValueProposalSent =TotalProposalSentValue[0].total*WeightValuePercentageProposalSent/100;
        const WeightValueOnNegotiation =TotalOnNegotiationValue[0].total*WeightValuePercentageOnNegotiation/100;



        
        
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

            WeightValuePercentageMeetingsScheduled,
            WeightValuePercentageQualification,
            WeightValuePercentageProposalSent,
            WeightValuePercentageOnNegotiation,
        

            WeightValueMeetingsScheduled,
            WeightValueQualification,
            WeightValueProposalSent,
            WeightValueOnNegotiation,

            ConversionRateMeetingScheduled: (TotalMeetingsScheduleWon / (TotalMeetingsScheduleWon + TotalMeetingsScheduleLost) * 100).toFixed(2) || 0,
            ConversionRateQualification: (TotalQualificationWon / (TotalQualificationWon + TotalQualificationLost) * 100).toFixed(2)  || 0,
            ConversionRateProposalSent: (TotalProposalSentWon / (TotalProposalSentWon + TotalProposalSentLost) * 100).toFixed(2)  || 0,
            ConversionRateOnNegotiation: (TotalOnNegotiationWon / (TotalOnNegotiationWon + TotalOnNegotiationLost) * 100 ).toFixed(2) || 0,
        
        });

    } catch (error) {
        console.error("Error fetching sales pipeline data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default GetSalesPipeline;