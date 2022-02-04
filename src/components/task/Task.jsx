import React from 'react';
import { AiOutlineCheckCircle, AiFillDelete, AiFillEdit } from 'react-icons/ai';

import '../../styles/task/task.css'

export const Task = ({ task }) => {
    return (
        <div className="task-container">
            <label className='task-name-completed-container '>
                <AiOutlineCheckCircle className='completed-task'/>
                <h1 className='task-name'>{task.name}</h1>
            </label>
            <div className="edit-delete-container">
                <AiFillDelete className='delete-task'/>
                <AiFillEdit className='edit-task'/>
            </div>
        </div>
    )
};
