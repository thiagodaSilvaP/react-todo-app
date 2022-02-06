import React from "react";

import { Task } from "../task/Task";

import "../../styles/tasks/tasks.css";

export const Tasks = ({ data, handleTaskDeletion, handleTaskComplete, handleTaskEdit }) => {
  return (
    <div className="tasks-container">
      {data.map((task, index) => (
        <Task
          task={task}
          key={index}
          handleTaskDeletion={handleTaskDeletion}
          handleTaskComplete={handleTaskComplete}
          handleTaskEdit={handleTaskEdit}
        />
      ))}
    </div>
  );
};
