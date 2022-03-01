import React, { useState } from "react";
import { AiOutlineCheckCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";

//import "../../styles/task/task.css";

import {
  Container,
  TaskNameAndCompletedButtonContainer,
  CompletedButton,
  EditAndDeleteButtonContainer,
  EditButton,
  DeleteButton,
  EditTaskNameInput,
  EditTaskNameButton
} from "./style";

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
    <Container taskCompleted={task.completed}
    //style={task.completed ? { background: "#00CED1", color: "#fff" } : {}}
    >
      <TaskNameAndCompletedButtonContainer>
        {isEdit ? (
          <EditTaskNameInput
            type="text"
            placeholder={taskName}
            className="edit-task-name"
            onChange={handleChangeTaskName}
          ></EditTaskNameInput>
        ) : (
          <>
            <CompletedButton
              onClick={handleOnCompleteTask}
              //style={task.completed ? { color: "#fff" } : {}}
            >
              <AiOutlineCheckCircle />
            </CompletedButton>
            <h1 className="task-name">{task.name}</h1>
          </>
        )}
      </TaskNameAndCompletedButtonContainer>
      <EditAndDeleteButtonContainer>
        <DeleteButton
          onClick={handleOnDeleteClick}
          //style={task.completed ? { color: "#fff" } : {}}
        >
          <AiFillDelete />
        </DeleteButton>
        {isEdit ? (
          <EditTaskNameButton
            onClick={handleOnEditTask}
            /*style={
              task.completed ? { background: "#fff", color: "#00ced1" } : {}
            }*/
          >
            Editar
          </EditTaskNameButton>
        ) : (
          <EditButton
            onClick={changeIsEdit}
            //style={task.completed ? { color: "#fff" } : {}}
          >
            <AiFillEdit />
          </EditButton>
        )}
      </EditAndDeleteButtonContainer>
    </Container>
  );
};
