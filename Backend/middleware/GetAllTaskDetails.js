import TaskModel from "../model/TaskModel.js";
const GetAllTaskDetails=async (req,res)=>{
    try{
        const tasks=await TaskModel.find({});
        if(tasks.length===0){
            return res.status(404).json({message:"No tasks found"});
        }   
        res.status(200).json(tasks);
    }catch(error){
        console.error("Error fetching task details:", error);
        res.status(500).json({error:"Internal server error"});
    }
}

export default GetAllTaskDetails;