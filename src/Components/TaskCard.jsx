import { useState } from "react";
import { Store } from "./Redux/Store";

const TaskCard = ({ index, name, status }) => {
  const [show, setShow] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleStatus = () => {
    Store.dispatch({
      type: "update-status",
      payload: {
        index,
        status,
      },
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setNewName(value);
  };

  const handleUpdate = () => {
    Store.dispatch({
      type: "update-task",
      payload: {
        index,
        status,
        newName,
      },
    });
  };

  const handleDelete = () => {
    Store.dispatch({
      type: "delete-task",
      payload: {
        index,
        status,
      },
    });
  };

  return (
    <div
      style={{
        border: `2px solid ${status ? "green" : "red"}`,
        padding: "10px",
        margin: "10px",
        backgroundColor: "#f8f8f8",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s",
      }}
    >
      <h1
        style={{
          color: status ? "green" : "red",
          fontSize: "20px",
          marginBottom: "10px",
        }}
      >
        {name}
      </h1>
      <div>
        <button
          style={{
            backgroundColor: status ? "#ff5252" : "#4caf50",
            padding: "8px 12px",
            margin: "5px",
            borderRadius: "3px",
            cursor: "pointer",
            color: "white",
            border: "none",
          }}
          onClick={handleStatus}
        >
          {status ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button
          style={{
            backgroundColor: "#2196f3",
            padding: "8px 12px",
            margin: "5px",
            borderRadius: "3px",
            cursor: "pointer",
            color: "white",
            border: "none",
          }}
          onClick={() => setShow((pre) => !pre)}
        >
          Update
        </button>
        <button
          style={{
            backgroundColor: "#e91e63",
            padding: "8px 12px",
            margin: "5px",
            borderRadius: "3px",
            cursor: "pointer",
            color: "white",
            border: "none",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      {show && (
        <div style={{ marginTop: "10px" }}>
          <div>
            <label style={{ fontSize: "16px", marginRight: "10px" }}>Name </label>
            <input
              style={{
                padding: "8px",
                margin: "5px",
                borderRadius: "3px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
              onChange={handleChange}
              value={newName}
              type="text"
            />
          </div>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "8px 12px",
              borderRadius: "3px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleUpdate}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export { TaskCard };

