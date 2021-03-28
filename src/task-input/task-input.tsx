import React, { useRef } from "react";
import { TaskModule } from "../types";
import "./task-input.css";
import { v4 as uuidv4 } from "uuid";

type TaskInputProps = {
  setTasks: React.Dispatch<React.SetStateAction<TaskModule.Task[]>>;
};

const TaskInput: React.FC<TaskInputProps> = (props) => {
  const taskInputRef = useRef<HTMLInputElement>(null);
  const submitTasks = () => {
    let v: number = 0;
    const inputValue = taskInputRef.current?.value;
    if (inputValue === undefined) {
      return;
    }
    props.setTasks((tasks) => [
      ...tasks,
      { description: inputValue, id: uuidv4() },
    ]);
  };
  return (
    <div className="background">
      <input
        ref={taskInputRef}
        className="inputTag"
        type="text"
        placeholder="type in your task"
      />
      <button className="submitButton" onClick={submitTasks}>
        submit
      </button>
    </div>
  );
};

export { TaskInput };
