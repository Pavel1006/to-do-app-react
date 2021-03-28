import React, { useState } from "react";
import { TaskInput } from "./task-input";
import { TaskCard } from "./task-card";
import { TaskModule } from "./types";

function App() {
  const [tasks, setTasks] = useState<TaskModule.Task[]>([]);
  function handleDelete() {}
  console.log(tasks);
  return (
    <div className="MainDiv">
      <TaskInput setTasks={setTasks} />
      {tasks.map((task, index) => {
        let taskDescription = task.description;
        console.log(task);
        console.log(index);
        return <TaskCard taskDescription={taskDescription} key={index} />;
      })}
    </div>
  );
}

export default App;
