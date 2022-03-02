import React, { useRef, useState } from "react";

import {
  Container,
  AddTaskInputContainer,
  AddTaskButtonContainer,
} from "./style";

export const AddTask = ({data, setData}) => {
  const [taskName, setTaskName] = useState("");
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
