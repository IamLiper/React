import React from 'react';
import logo from './logo.png'
import { useState } from 'react';
import './App.css';

function App() {
    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = () => {
      if (!tarefa.trim()) {
        alert('Por favor, digite um nome de uma tarefa.');
        return;
      }

      if (tarefas.includes(tarefa.trim())) {
        alert(`Tarefa "${tarefa.trim()}" já existe na lista.`);
        return;
      }

      setTarefas([...tarefas, tarefa.trim()]);
      setTarefa('');
    }

    return (
      <div className='App'>
        <div className='conteiner'>
        <img src={logo} alt='Background' />
        <h1>Gerenciador de Tarefas</h1>
        <hr/>
        <h2 className='h2-1'>Adicionar Tarefas</h2>
        <input
          type='text'
          placeholder='Digite o nome do tarefa'
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          />

          <button onClick={adicionarTarefa}>Adicionar</button>
          <hr/>
          <h2>Lista de Tarefas</h2>
          <ol>
          {tarefas.map((tarefa, index) => (<li key={index}>{tarefa}</li>))}
          </ol>
        </div>
      </div>
    );
}

export default App;