import React, { useState } from "react";

const TaskCard = ({ task, onDelete, onUpdate, onMove }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    onUpdate(updatedTask);
    setEditing(false);
  };

  const handleMove = () => {
    const newListId = task.listId === "list1" ? "list2" : "list1";
    const updatedTaskWithNewList = { ...task, listId: newListId };
    onMove(updatedTaskWithNewList);
  };

  return (
    <div style={cardStyle}>
      {!isEditing ? (
        <div style={taskStyle}>
          <p>{task.title}</p>
          <button style={buttonStyle} onClick={onDelete}>
            Delete
          </button>
          <button style={buttonStyle} onClick={() => setEditing(true)}>
            Edit
          </button>
          <button style={moveButtonStyle} onClick={handleMove}>
            Move to {task.listId === "list1" ? "List 2" : "List 1"}
          </button>
        </div> 
      ) : (
        <div style={editStyle}>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, title: e.target.value })
            }
            style={inputStyle}
          />
          <button style={updateButtonStyle} onClick={handleUpdate}>
            Update
          </button>
        </div>
      )}
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "15px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const taskStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const editStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#e74c3c",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: "5px",
  transition: "background-color 0.3s ease, transform 0.2s ease",
};

const moveButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#3498db",
};

const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ddd",
  borderRadius: "4px",
  width: "100%",
};

const updateButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#2ecc71",
};

export default TaskCard;
  