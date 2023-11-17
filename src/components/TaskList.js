import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDelete, onUpdate, onMove }) => {
  return (
    <div style={taskListStyle}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onUpdate={(updatedTask) => onUpdate(updatedTask)}
          onMove={(newListId) => onMove(task.id, newListId)}
        />
      ))}
    </div>
  );  
}; 

const taskListStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

export default TaskList;


