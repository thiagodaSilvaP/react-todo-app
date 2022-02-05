import React, {useState} from "react";

import "../../styles/add-task/add-task.css";

export const AddTask = ({ handleTaskAdition }) => {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (event) => setTaskName(event.target.value);

  const handleOnClick = () => handleTaskAdition(taskName);

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
          />
        </div>
        <div className="button__add-task">
          <button onClick={handleOnClick}>Adicionar</button>
        </div>
      </div>
    </>
  );
};
