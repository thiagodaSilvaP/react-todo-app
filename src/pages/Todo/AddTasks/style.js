import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 5px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const AddTaskInputContainer = styled.div`
  height: 100%;
  padding: 10px 1rem;
  flex: 1;

  input {
    width: 100%;
    height: 100%;
    border: 1.5px solid rgb(150, 150, 150);
    border-radius: 4px;
    padding: 0px 5px;

    &::placeholder {
      font-style: italic;
    }
  }
`;

export const AddTaskButtonContainer = styled.div`
  height: 100%;
  padding: 10px 1rem;

  button {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    background: #00ced1;
    color: #fff;

    &:hover {
      background-color: #20b2aa;
    }
  }
`;
