import React from 'react';

import '../../styles/task/task.css'

export const Task = ({ task }) => {
    return (
        <div className="task-container">
            <label className='task-name-completed-container '>
                <input type="radio" name="task" className="task-completed" />
                <h1 className='task-name'>{task.name}</h1>
            </label>
            <h2>faef</h2>
        </div>
    )
};
