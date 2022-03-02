import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 8px;
  border-top: 1.5px solid #ccc;
  border-left: 1.5px solid #ccc;
  border-bottom: 1.5px solid #ccc;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 0px 4px 4px 0px;
    background: #20b2aa;
  }
  &::-webkit-scrollbar-thumb {
    background: #00ced1;
    border-radius: 20px;
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 200ms ease-in;
  }
`;

export const TaskContainer = styled.div`
  width: 100%;
  height: 100%;
`;
