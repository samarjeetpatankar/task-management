import { TaskCard } from "./TaskCard";

const ListCmp = ({ arr, status }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
        border: "2px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* list type : */}
      <h1 style={{ color: "#333", borderBottom: "2px solid #ddd", paddingBottom: "10px" }}>
        {status ? "Completed list" : "Notcompleted list"}
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        {arr.map((el, i) => {
          const new_key = i + "k" + Math.trunc(Math.random() * 100);

          // Display each task as a card
          return (
            <TaskCard
              index={i}
              status={status}
              name={el}
              key={new_key}
              style={{
                marginBottom: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }} // Additional styles for TaskCard
            />
          );
        })}
      </div>
    </div>
  );
};

export { ListCmp };
