import React, { useRef, useState, useContext } from "react";

import {TasksContext} from '../../../contexts/TasksContexts';

import {
  Container,
  AddTaskInputContainer,
  AddTaskButtonContainer,
} from "./style";

export const AddTask = () => {
  const [taskName, setTaskName] = useState("");
  const {data, setData} = useContext(TasksContext)
  const inputElement = useRef();

  const handleTaskAdition = (taskName) =>
    setData([...data, { id: Math.random(), name: taskName, completed: false }]);

  const handleOnClick = () => {
    handleTaskAdition(taskName);
    handleClearInput();
    handleFocusInput();
  };

  const handleInputChange = (event) => setTaskName(event.target.value);
  const handleClearInput = () => setTaskName("");
  const handleFocusInput = () => inputElement.current.focus();

  console.log(data)

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
