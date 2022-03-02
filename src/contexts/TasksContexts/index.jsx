import React, { createContext, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  /*const [data, setData] = useState([
    { id: Math.random(), name: "Ler", completed: false },
  ]);*/
  const [data, setData] = useState(JSON.parse(localStorage.getItem('tasks')) );

  return <TasksContext.Provider value={{data, setData}}>{children}</TasksContext.Provider>;
};
