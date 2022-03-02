import React, { createContext, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: Math.random(), name: "Ler", completed: false },
  ]);

  return <TasksContext.Provider value={{data, setData}}>{children}</TasksContext.Provider>;
};
