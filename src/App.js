import { useState } from "react";
import "./App.css";
import { ListCmp } from "./Components/ListCmp";
import { Store } from "./Components/Redux/Store";
import { CreateTask } from "./Components/CreateTask";
var XLSX = require("xlsx");

const newDataFn = (data) => {
  let stack = [];
  let index = 0;
  for (let i in data) {
    let res = data[i].map((el, j) => {
      index = index + 1;
      return {
        id: index,
        name: el,
        status: i,
      };
    });
    stack = [...stack, ...res];
  }
  return stack;
};

function App() {
  const [data, setData] = useState(Store.getState());

  // getting the data from Store
  Store.subscribe(() => {
    setData(Store.getState());
  });

  // Export the entire list to Excel
  const handleOnExport = () => {
    let new_data = newDataFn(data);

    let wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(new_data);

    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

    XLSX.writeFile(wb, "excel.xlsx");
  };

  return (
    <div className="App">
      <CreateTask />
      <button className={"button"} onClick={handleOnExport}>
        Export to Excel
      </button>
      <div className="list">
        <ListCmp arr={data.incomplete} status={false} />
        <ListCmp arr={data.complete} status={true} />
      </div>
    </div>
  );
}

export default App;

