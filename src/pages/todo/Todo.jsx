import React, { useState } from "react";
import { AddTask } from "../../components/add-tasks/AddTask";

import { Tasks } from "../../components/tasks/Tasks";

import "../../styles/todo/todo.css";

export const Todo = () => {
  const [data, setData] = useState([
    { id: Math.random(), name: "Ler", completed: false },
  ]);

  const handleTaskAdition = (taskName) =>
    setData([...data, { id: Math.random(), name: taskName, completed: false }]);

  const handleTaskDeletion = (taskId) => {
    const newTasks = data.filter((task) => task.id !== taskId);
    console.log(newTasks);
    setData(newTasks);
  };

  const handleTaskComplete = (taskId) => {
    const newTasks = data.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : { ...task }
    );
    setData(newTasks);
  };

  const handleTaskEdit = (taskId, taskName) => {
    const newTasks = data.map((task) =>
      task.id === taskId ? { ...task, name: taskName } : { ...task }
    );
    setData(newTasks);
  };

  console.log(data);

  return (
    <main className="todo-container">
      <AddTask handleTaskAdition={handleTaskAdition} />
      <Tasks
        data={data}
        handleTaskDeletion={handleTaskDeletion}
        handleTaskComplete={handleTaskComplete}
        handleTaskEdit={handleTaskEdit}
      />
    </main>
  );
};
