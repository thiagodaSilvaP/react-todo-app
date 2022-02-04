import React from 'react';

import '../../styles/add-task/add-task.css'

export const AddTask = () => {
    return (
        <>
            <div className="add-task-container">
                <div className="input-container__add-task">
                    <input type="text" name="add-task" id="add-task" placeholder='Digite uma tarefa'/>
                </div>
                <div className="button__add-task">
                    <button>Adicionar</button>
                </div>
            </div>
        </>
    )
};
