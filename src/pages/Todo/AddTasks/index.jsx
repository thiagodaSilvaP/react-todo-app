import React, { useRef, useState, useContext } from "react";

import {TasksContext} from '../../../contexts/TasksContexts';

import {
  Container,
  AddTaskInputContainer,
  AddTaskButtonContainer,
} from "./style";

export const AddTask = () => {
  const {tasks, setTasks} = useContext(TasksContext)
  const [taskName, setTaskName] = useState("");
  const inputElement = useRef();


  
  const handleOnClick = () => {
    handleAddTask(taskName);
    handleClearInput();
    handleFocusInput();
  };

  const handleAddTask = (taskName) =>
    setTasks(prev => [...prev, { id: Math.random(), name: taskName, completed: false }]);

  const handleInputChange = (event) => setTaskName(event.target.value);
  const handleClearInput = () => setTaskName("");
  const handleFocusInput = () => inputElement.current.focus();
  return (
    <>
      <Container>
        <AddTaskInputContainer>
          <input
            type="text"
            name="add-task"
            id="add-task"
            placeholder="Digite uma tarefa"
            onChange={handleInputChange}
            value={taskName}
            ref={inputElement}
          />
        </AddTaskInputContainer>
        <AddTaskButtonContainer>
          <button onClick={handleOnClick}>Adicionar</button>
        </AddTaskButtonContainer>
      </Container>
    </>
  );
};
