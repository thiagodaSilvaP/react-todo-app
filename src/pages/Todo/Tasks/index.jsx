import React from "react";

import { Task } from "../../../components/Task";

import {Container} from './style';

export const Tasks = ({ data, handleTaskDeletion, handleTaskComplete, handleTaskEdit }) => {
  return (
    <Container>
      {data.map((task, index) => (
        <Task
          task={task}
          key={index}
          handleTaskDeletion={handleTaskDeletion}
          handleTaskComplete={handleTaskComplete}
          handleTaskEdit={handleTaskEdit}
        />
      ))}
    </Container>
  );
};
