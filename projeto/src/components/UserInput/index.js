import React, { useState } from 'react';
import './styles.css';

const UserInput = ({ onAdduser }) => {
    const [usuario, setUsuario] = useState('');

    const handleChange = ( event ) => {
        setUsuario(event.target.value);
    };

    const handleSubmit = () => {
        if (usuario.trim) {
            onAdduser(usuario);
            setUsuario('');
        } else {
            alert('Digite o nome do usuário.')
        }
    };

    return (
        <div className='user-input'>
            <h2>Adicionar usuário</h2>
            <input
                type='text'
                placeholder='Digite o nome do usuário'
                value={usuario}
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>Adicionar</button>
        </div>
    )
};

export default UserInput;