import React, { useRef, useState } from "react";

import "../../styles/add-task/add-task.css";

export const AddTask = ({ handleTaskAdition }) => {
  const [taskName, setTaskName] = useState("");
  const inputElement = useRef()
  
  const handleOnClick = () => {
    handleTaskAdition(taskName);
    handleClearInput()
    handleFocusInput()
  }
  
  const handleInputChange = (event) => setTaskName(event.target.value);
  const handleClearInput = () => setTaskName('')
  const handleFocusInput = () => inputElement.current.focus()

  return (
    <>
      <div className="add-task-container">
        <div className="input-container__add-task">
          <input
            type="text"
            name="add-task"
            id="add-task"
            placeholder="Digite uma tarefa"
            onChange={handleInputChange}
            value={taskName}
            ref={inputElement}
          />
        </div>
        <div className="button__add-task">
          <button onClick={handleOnClick}>Adicionar</button>
        </div>
      </div>
    </>
  );
};
