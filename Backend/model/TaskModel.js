import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema({
    TaskName:{type :String,required:true},
    TaskDescription:{type :String,required:true},
    TaskStatus:{type :String,
        enum:["Pending", "In Progress", "Completed", "On Hold"],
        default:"Pending",
        required:true},
    TaskDueDate:{type :Date,required:true},
    TaskAssignedTo:{type :String,required:true},
    TaskCreatedBy:{type :String,required:true},
    TaskCreatedAt:{type :Date,default:Date.now},
   
});

const TaskModel=mongoose.model("Task",TaskSchema);
export default TaskModel;

