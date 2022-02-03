import React from 'react';

import { Task } from '../task/Task';

import '../../styles/tasks/tasks.css'

export const Tasks = ({ data }) => {
    return (
        <div className="tasks-container">
            {data.map((task, index) => <Task task={task} key={index}/>)}
        </div>
    )
};
