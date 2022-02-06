import React, { useState } from "react";
import { AiOutlineCheckCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";

import "../../styles/task/task.css";

export const Task = ({
  task,
  handleTaskDeletion,
  handleTaskComplete,
  handleTaskEdit,
}) => {
  const [taskName, settaskName] = useState(task.name);
  const [isEdit, setIsEdit] = useState(false);

  const handleOnDeleteClick = () => handleTaskDeletion(task.id);

  const handleOnCompleteTask = () => handleTaskComplete(task.id);

  const handleChangeTaskName = (event) => settaskName(event.target.value);

  const handleOnEditTask = () => {
    handleTaskEdit(task.id, taskName);
    changeIsEdit();
  };

  const changeIsEdit = () => setIsEdit(!isEdit);

  return (
    <div
      className="task-container"
      style={task.completed ? { background: "#00CED1", color: "#fff" } : {}}
    >
      <label className="task-name-completed-container ">
        {isEdit ? (
          <input
            type="text"
            placeholder={taskName}
            className="edit-task-name"
            onChange={handleChangeTaskName}
          ></input>
        ) : (
          <>
            <AiOutlineCheckCircle
              className="completed-task"
              onClick={handleOnCompleteTask}
              style={task.completed ? { color: "#fff" } : {}}
            />
            <h1 className="task-name">{task.name}</h1>
          </>
        )}
      </label>
      <div className="edit-delete-container">
        <AiFillDelete
          className="delete-task"
          onClick={handleOnDeleteClick}
          style={task.completed ? { color: "#fff" } : {}}
        />
        {isEdit ? (
          <button
            className="edit-task-button"
            onClick={handleOnEditTask}
            style={task.completed ? { background: '#fff', color: '#00ced1' } : {}}
          >
            Editar
          </button>
        ) : (
          <AiFillEdit
            className="edit-task"
            onClick={changeIsEdit}
            style={task.completed ? { color: "#fff" } : {}}
          />
        )}
      </div>
    </div>
  );
};
