import React from "react";

// Icon
import ErrorIcon from "@material-ui/icons/Error";

// Styling
import "./Empty.css";

const Empty = () => {
  return (
    <div className="empty-box">
      <div className="empty">
        <ErrorIcon />
        <span>Tidak ditemukan</span>
      </div>
    </div>
  );
};

export default Empty;
