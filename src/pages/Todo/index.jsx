import React, {useContext, useEffect } from "react";

import {TasksContext} from '../../contexts/TasksContexts';

import { AddTask } from "./AddTasks";
import { Tasks } from "./Tasks";

import { Container } from "./style";

export const Todo = () => {
  const {data, setData} = useContext(TasksContext)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(data))
  }, [data])

  return (
    <Container>
      <AddTask data={data} setData={setData}/>
      <Tasks/>
    </Container>
  );
};
