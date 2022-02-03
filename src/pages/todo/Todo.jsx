import React, { useState } from 'react';

import { Tasks } from '../../components/tasks/Tasks';

import '../../styles/todo/todo.css'

export const Todo = () => {
    const [data, setData] = useState([
        { name: 'Ler' },
        { name: 'Cozinhar' },
        { name: 'Tocar' },
        { name: 'Cantar' },
    ]);

    return (
        <div className="todo-container">
            <div>Header</div>
            <Tasks data={data}/>
        </div>
    )
};
