import React, { useState } from 'react';
import { AddTask } from '../../components/add-tasks/AddTask';

import { Tasks } from '../../components/tasks/Tasks';

import '../../styles/todo/todo.css'

export const Todo = () => {
    const [data, setData] = useState([
        { name: 'Ler' },
        { name: 'Cozinhar' },
        { name: 'Tocar' },
        { name: 'Cantar' },
        { name: 'Cantar' },
        { name: 'Cantar' },
        { name: 'Cantar' },
        { name: 'Cantar' },
        { name: 'Cantar' },
    ]);

    return (
        <main className="todo-container">
            <AddTask />
            <Tasks data={data} />
        </main>
    )
};
