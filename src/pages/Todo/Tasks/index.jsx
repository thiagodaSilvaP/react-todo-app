import React, { useContext } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { TasksContext } from "../../../contexts/TasksContexts";

import { Task } from "../../../components/Task";

import { Container, TaskContainer } from "./style";

export const Tasks = () => {
  const { data, setData } = useContext(TasksContext);

  const handleTaskDeletion = (taskId) => {
    const newTasks = data.filter((task) => task.id !== taskId);
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

  return (
    <Container>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
          {data.map((task, index) => (
            <Task
              task={task}
              key={`task-${index}`}
              handleTaskDeletion={handleTaskDeletion}
              handleTaskComplete={handleTaskComplete}
              handleTaskEdit={handleTaskEdit}
            />
          ))}
      </ReactCSSTransitionGroup>
    </Container>
  );
};
