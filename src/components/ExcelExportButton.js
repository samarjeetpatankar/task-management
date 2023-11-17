import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelExportButton = ({ tasks }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    padding: "10px 15px",
    backgroundColor: isHovered ? "#0d8bf2" : "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Tasks");
    XLSX.writeFile(workbook, "tasks.xlsx");
  };

  return (
    <button
      onClick={exportToExcel}
      style={buttonStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Export to Excel
    </button>
  );
};

export default ExcelExportButton;
