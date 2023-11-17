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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        border: status ? "2px solid green" : "2px solid red",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "300px", // Set a fixed width for each task card
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          flex: 1,
          color: status ? "green" : "red",
          marginRight: "10px",
        }}
      >
        {name}
      </h1>
      <div style={{ display:"flex", flexDirection:"row" }}>
        <button
          style={{
            backgroundColor: status ? "#ff0000cc" : "#008000cc",
            padding: "5px",
            margin: "5px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={handleStatus}
        >
          {status ? "incompleted" : "completed"}
        </button>
        <button
          style={{
            padding: "5px",
            margin: "5px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={() => setShow((pre) => !pre)}
        >
          Update
        </button>
        <button
          style={{
            padding: "5px",
            margin: "5px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      {show ? (
        <div style={{ marginTop: "10px" }}>
          <div>
            <label>Name </label>
            <input
              style={{
                flex: 1,
                padding: "5px",
                margin: "5px",
                borderRadius: "3px",
                border: "1px solid #ccc",
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
              padding: "5px",
              borderRadius: "3px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleUpdate}
          >
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export { TaskCard };


