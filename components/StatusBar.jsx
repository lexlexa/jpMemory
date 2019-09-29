import React from "react";
import "../style/StatusBar.css";
function StatusBar({ title, onExit }) {
  return (
    <div className="status_bar">
      <div className="title">{title}</div>
      <div onClick={onExit} className="exit" />
    </div>
  );
}

export default StatusBar;
