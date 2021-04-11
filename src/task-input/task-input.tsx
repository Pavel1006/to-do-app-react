import React, { useRef, useState } from "react";
import { TaskModule } from "../types";
import "./task-input.css";
import { v4 as uuidv4 } from "uuid";

type TaskInputProps = {
  setTasks: React.Dispatch<React.SetStateAction<TaskModule.Task[]>>;

  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  inputVal: string;
};
const TaskInput: React.FC<TaskInputProps> = (props) => {
  const taskInputRef = useRef<HTMLInputElement>(null);
  console.log(taskInputRef.current);
  const submitTasks = () => {
    if (taskInputRef.current === null) {
      return;
    }
    const inputValue = taskInputRef.current.value;
    if (inputValue === undefined || inputValue === "") {
      return;
    }
    props.setTasks((tasks) => [
      ...tasks,
      { description: inputValue, id: uuidv4() },
    ]);
    props.setInputVal("");
  };
  return (
    <div className="background">
      <input
        value={props.inputVal}
        ref={taskInputRef}
        className="inputTag"
        type="text"
        placeholder="type in your task"
        onChange={(e) => props.setInputVal(e.target.value)}
      />
      <button className="blue-background" onClick={submitTasks}>
        submit
      </button>
    </div>
  );
};

export { TaskInput };
