import TaskModel from "../model/TaskModel.js";

const SaveTaskDetails = async (req, res) => {
    try {
        const { TaskName, TaskDescription, TaskStatus, TaskDueDate, TaskAssignedTo, TaskCreatedBy } = req.body; 
        if (!TaskName || !TaskDescription || !TaskStatus || !TaskDueDate || !TaskAssignedTo || !TaskCreatedBy) {
            // Check if all required fields are provided
            console.error("All fields are required"); 
            return res.status(400).json({ error: "All fields are required" });
        }
        const newTask = new TaskModel({
            TaskName,
            TaskDescription,
            TaskStatus,
            TaskDueDate,
            TaskAssignedTo,
            TaskCreatedBy
            // TaskCreatedAt is set to the current date by default in the schema
        });
        await newTask.save();
        res.status(201).json({ message: "Task details saved successfully", task: newTask });
    } catch (error) {
        console.error("Error saving task details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default SaveTaskDetails;