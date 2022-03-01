import styled from "styled-components";

let theme

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 1.5px solid #ccc;
  padding: 0px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme};

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
  }
`;

export const EditAndDeleteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompletedButton = styled.button`
  font-size: larger;
  cursor: pointer;
  color: #00ced1;

  &:hover {
    color: #20b2aa;
  }
`;

export const EditButton = styled.button`
  font-size: larger;
  cursor: pointer;
  color: #00ced1;

  &:hover {
    color: #20b2aa;
  }
`;

export const DeleteButton = styled.button`
  font-size: larger;
  cursor: pointer;
  color: #00ced1;
  margin-right: 10px;

  &:hover {
    color: #20b2aa;
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
`;
