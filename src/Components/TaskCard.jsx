import { useState } from "react";
import { Store } from "./Redux/Store";

const TaskCard = ({ index, name, status }) => {
  const [show, setShow] = useState(false);
  const [newName, setNewName] = useState(name);

  // to change the status of a particular task :
  const handleStatus = () => {
    Store.dispatch({
      type: "update-status",
      payload: {
        index,
        status,
      },
    });
  };

  // to handle update for a task :
  const handleChange = (e) => {
    const value = e.target.value;
    setNewName(value);
  };

  // to update a particular task :
  const handleUpdate = (e) => {
    Store.dispatch({
      type: "update-task",
      payload: {
        index,
        status,
        newName,
      },
    });
  };

  // to delete a particular task :
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
        border: status ? "2px solid green" : "2px solid red",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h1
        style={{
          color: status ? "green" : "red",
        }}
      >
        {name}
      </h1>
      <div>
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
          onClick={() => {
            setShow((pre) => !pre);
          }}
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