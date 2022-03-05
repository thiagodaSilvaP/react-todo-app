import React, { useState, useContext } from "react";
import { AiOutlineCheckCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";

import { TasksContext } from "../../contexts/TasksContexts";

//import "../../styles/task/task.css";

import {
  Container,
  TaskNameAndCompletedButtonContainer,
  CompletedButton,
  EditAndDeleteButtonContainer,
  EditButton,
  DeleteButton,
  EditTaskNameInput,
  EditTaskNameButton,
} from "./style";

export const Task = ({ task }) => {
  const [taskEditName, setEditTaskName] = useState(undefined);
  const [isEdit, setIsEdit] = useState(false);
  const { setTasks } = useContext(TasksContext);

  const handleChangeTaskName = (event) => setEditTaskName(event.target.value);

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : { ...task }
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleOnEditTask = () => {
    handlekEditTask(task.id, taskEditName);
    changeIsEdit();
  };

  const handlekEditTask = (taskId, taskName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, name: taskName } : { ...task }
      )
    );
  };

  const changeIsEdit = () => setIsEdit(!isEdit);

  return (
    <Container
      isComplete={task.completed}
      //style={task.completed ? { background: "#00CED1", color: "#fff" } : {}}
    >
      <TaskNameAndCompletedButtonContainer isComplete={task.completed}>
        {isEdit ? (
          <EditTaskNameInput
            type="text"
            placeholder={task.name}
            className="edit-task-name"
            onChange={handleChangeTaskName}
          ></EditTaskNameInput>
        ) : (
          <>
            <CompletedButton
              onClick={() => handleCompleteTask(task.id)}
              isComplete={task.completed}
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
          onClick={() => handleDeleteTask(task.id)}
          isComplete={task.completed}
          //style={task.completed ? { color: "#fff" } : {}}
        >
          <AiFillDelete />
        </DeleteButton>
        {isEdit ? (
          <EditTaskNameButton
            onClick={handleOnEditTask}
            isComplete={task.completed}
            /*style={
              task.completed ? { background: "#fff", color: "#00ced1" } : {}
            }*/
          >
            Editar
          </EditTaskNameButton>
        ) : (
          <EditButton
            onClick={changeIsEdit}
            isComplete={task.completed}
            //style={task.completed ? { color: "#fff" } : {}}
          >
            <AiFillEdit />
          </EditButton>
        )}
      </EditAndDeleteButtonContainer>
    </Container>
  );
};
