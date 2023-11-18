import { useState } from "react";
import { Store } from "./Redux/Store";

const CreateTask = () => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Store.dispatch({
      type: "add-task",
      payload: newTask,
    });
    setNewTask("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewTask(value);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
      onSubmit={handleSubmit}
    >
      <input
        style={{
          padding: "8px",
          margin: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
        value={newTask}
        onChange={handleChange}
        type="text"
        required
      />
      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
        }}
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export { CreateTask };



