import React, { userState, useState } from 'react';
import './App.css';
import logo from './assets/img/logo.png'
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {

  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    if (tarefas.includes(novaTarefa)) {
      alert('Tarefa já existe na lista.');
      return;
    }
    setTarefas([...tarefas, novaTarefa]);
  }

  return (
    <div className='App'>
      <img src={logo} alt='logo das tarefas'className='logo' />
      <hr/>
      <UserInput onAdduser={adicionarTarefa}/>
      <hr/>
      <UserList tarefas={tarefas}/>
    </div>
  );
};

export default App;