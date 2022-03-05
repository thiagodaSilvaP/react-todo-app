import React, { useContext, useEffect } from "react";

import { TasksContext } from '../../contexts/TasksContexts';

import { AddTask } from "./AddTasks";
import { Tasks } from "./Tasks";

import { Container } from "./style";

export const Todo = () => {
  const { tasks } = useContext(TasksContext)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log(JSON.parse(localStorage.getItem('tasks')));
  }, [tasks])
  
  return (
    <Container>
      <AddTask />
      <Tasks />
    </Container>
  );
};
