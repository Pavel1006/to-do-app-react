import React from "react";
import "./task-card.css";

const TaskCard = () => {
  return (
    <div className="border">
      <input type="checkbox" />
      <span></span>
      <button>delete</button>
    </div>
  );
};

export { TaskCard };
