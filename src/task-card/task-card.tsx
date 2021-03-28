import React from "react";
import "./task-card.css";

type TaskCardProps = { taskDescription: string };

const TaskCard = (props: TaskCardProps) => {
  return (
    <div className="border">
      <input type="checkbox" />
      <span>{props.taskDescription}</span>
      <button>delete</button>
    </div>
  );
};

export { TaskCard };
