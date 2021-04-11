import React, { useState } from "react";
import { TaskInput } from "./task-input";
import { TaskCard } from "./task-card";
import { TaskModule } from "./types";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<TaskModule.Task[]>([]);
  const [inputVal, setInputVal] = useState("");
  function handleEdit(id: string, description: string) {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setInputVal(description);
    setTasks(remainingTasks);
  }

  function handleDelete(id: string) {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  }
  console.log(tasks);
  return (
    <div className="MainDiv">
      <TaskInput
        inputVal={inputVal}
        setInputVal={setInputVal}
        setTasks={setTasks}
      />
      {tasks.map((task, index) => {
        let taskDescription = task.description;
        return (
          <TaskCard
            handleEdit={handleEdit}
            taskId={task.id}
            handelDelete={handleDelete}
            taskDescription={taskDescription}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
