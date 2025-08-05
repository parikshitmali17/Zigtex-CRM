import TaskModel from "../model/TaskModel.js";

const DeleteTask = async (req, res) => {
    try {
        const { id } = req.params; // Get the task ID from the request parameters   
        const deletedTask = await TaskModel.findByIdAndDelete(id); // Delete the task by ID
        if (!deletedTask) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Internal server error" });
    }   
}

export default DeleteTask;
