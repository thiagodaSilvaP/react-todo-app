import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 1.5px solid #ccc;
  padding: 0px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isComplete }) => (isComplete ? "#00CED1" : "#fff")};
`;

export const TaskNameAndCompletedButtonContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: larger;
    font-weight: normal;
    margin-left: 10px;
    text-transform: lowercase;
    color: ${({ isComplete }) => (isComplete ? "#fff" : "#000")};
  }
`;

export const EditAndDeleteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompletedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  cursor: pointer;
  color: ${({ isComplete }) => (isComplete ? "#fff" : "#00CED1")};
  background-color: inherit;

  &:hover {
    color: ${({ isComplete }) => (isComplete ? "#eee" : "#20b2aa")};
  }
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  cursor: pointer;
  color: ${({ isComplete }) => (isComplete ? "#fff" : "#00CED1")};
  background-color: inherit;

  &:hover {
    color: ${({ isComplete }) => (isComplete ? "#eee" : "#20b2aa")};
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  cursor: pointer;
  margin-right: 10px;
  color: ${({ isComplete }) => (isComplete ? "#fff" : "#00CED1")};
  background-color: inherit;

  &:hover {
    color: ${({ isComplete }) => (isComplete ? "#eee" : "#20b2aa")};
  }
`;

export const EditTaskNameInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 0px 10px;
  border: 1.5px solid rgb(150, 150, 150);
  border-radius: 4px;
  padding: 0px 5px;

  &::placeholder {
    font-style: italic;
  }
`;

export const EditTaskNameButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  background-color: #00ced1;
  color: #fff;
  font-weight: bolder;
  cursor: pointer;

  color: ${({ isComplete }) => (isComplete ? "#00CED1" : "fff")};
  background-color: ${({ isComplete }) => (isComplete ? "#fff" : "#00CED1")};
`;
