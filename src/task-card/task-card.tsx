import React from "react";
import "./task-card.css";

type TaskCardProps = {
  taskDescription: string;
  handelDelete: (id: string) => void;
  taskId: string;
  handleEdit: (id: string, taskDescription: string) => void;
};

const TaskCard = (props: TaskCardProps) => {
  return (
    <div className="border">
      <input type="checkbox" className="margin" />
      <span className="alignCenter">{props.taskDescription}</span>
      <button
        className="blue-background"
        onClick={() => props.handleEdit(props.taskId, props.taskDescription)}
      >
        edit
      </button>
      <button
        className="blue-background"
        onClick={() => props.handelDelete(props.taskId)}
      >
        delete
      </button>
    </div>
  );
};
export { TaskCard };
