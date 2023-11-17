import React, { useState } from "react";
import TaskList from "./components/TaskList";
import ExcelExportButton from "./components/ExcelExportButton";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = (title, listId) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, title, listId },
    ]);
  };
  
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const moveTask = (taskId, newListId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, listId: newListId } : task
      )
    );
  };

  return (
    <div className="app-container">
      <TaskList
        tasks={tasks.filter((task) => task.listId === "list1")}
        onDelete={deleteTask}
        onUpdate={updateTask}
        onMove={moveTask}
      />
      <TaskList
        tasks={tasks.filter((task) => task.listId === "list2")}
        onDelete={deleteTask}
        onUpdate={updateTask}
        onMove={moveTask}
      />

      <div className="add-task-container">
        <input
          type="text"
          placeholder="Task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={() => addTask(newTaskTitle, "list1")}>
          Add Task to List 1
        </button>
        <button onClick={() => addTask(newTaskTitle, "list2")}>
          Add Task to List 2
        </button>
        <ExcelExportButton tasks={tasks} />
      </div>
    </div>
  );
};

export default App;

