import React, { createContext, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  /*const [data, setData] = useState([
    { id: Math.random(), name: "Ler", completed: false },
  ]);*/
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
