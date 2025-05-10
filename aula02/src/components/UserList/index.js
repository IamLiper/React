import React from 'react';
import './styles.css';

const UserList = ({ tarefas }) => {
    return (
        <div className='user-list'>
            <h2>Lista de tarefas</h2>
            <ol>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ol>
        </div>
    );
};

export default UserList;