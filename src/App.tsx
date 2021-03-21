import React, { useState } from "react";
import { TaskInput } from "./task-input";
import { TaskCard } from "./task-card";
import { TaskModule } from "./types";
function App() {
  const [tasks, setTasks] = useState<TaskModule.Task[]>([]);

  console.log(tasks);
  return (
    <div className="MainDiv">
      <TaskInput setTasks={setTasks} />
      {tasks.map((task, index) => {
        console.log(task);
        return <TaskCard key={index} />;
      })}
    </div>
  );
}

export default App;
