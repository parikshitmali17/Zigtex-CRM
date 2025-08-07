import TaskModel from "../model/TaskModel.js";

const EditTaskDetails=async (req, res) => {
    try {
        const { id } = req.params; // Get the task ID from the request parameters
       
        const { TaskName, TaskDescription, TaskStatus, TaskDueDate, TaskAssignedTo } = req.body; // Get the updated task details from the request body      

        const updatedTask =await TaskModel.findByIdAndUpdate(
            id,
            {TaskName,TaskDescription,TaskStatus,TaskDueDate,TaskAssignedTo},
            { new: true } // Return the updated document
        );
        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }   
        res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }   

}
    export default EditTaskDetails;
    