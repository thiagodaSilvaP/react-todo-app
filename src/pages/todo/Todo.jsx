import React, { useState } from "react";
import { AddTask } from "../../components/add-tasks/AddTask";

import { Tasks } from "../../components/tasks/Tasks";

import "../../styles/todo/todo.css";

export const Todo = () => {
    const [data, setData] = useState([
        { id: Math.random(), name: "Ler", completed: false },
    ]);

    const handleTaskAdition = (taskName) =>
        setData([...data, { id: Math.random(), name: taskName, completed: false }]);

    return (
        <main className="todo-container">
            <AddTask handleTaskAdition={handleTaskAdition} />
            <Tasks data={data} />
        </main>
    );
};
