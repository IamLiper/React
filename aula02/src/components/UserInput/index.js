import React, { useState } from 'react';
import './styles.css';

const UserInput = ({ onAdduser }) => {
    const [tarefa, setTarefa] = useState('');

    const handleChange = ( event ) => {
        setTarefa(event.target.value);
    };

    const handleSubmit = () => {
        if (tarefa.trim) {
            onAdduser(tarefa);
            setTarefa('');
        } else {
            alert('Digite o nome da tarefa.')
        }
    };

    return (
        <div className='user-input'>
            <h2>Adicionar Tarefa</h2>
            <input
                type='text'
                placeholder='Digite o nome da tarefa'
                value={tarefa}
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>Adicionar</button>
        </div>
    )
};

export default UserInput;