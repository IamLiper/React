import React, { userState, useState } from 'react';
import './App.css';
import logo from './assets/img/logo.avif';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {

  const [usuarios, setUsuarios] = useState(['Sofia', 'Lipe', 'Lukas']);

  const adicionarUsuario = (novoUsuario) => {
    if (usuarios.includes(novoUsuario)) {
      alert('Usuário já existe na lista.');
      return;
  }
  setUsuarios([...usuarios, novoUsuario]);
}

  return (
    <div className='App'>
      <img src={logo} alt='Logo de empresa' className='logo'/>
      <hr/>
      <UserInput onAdduser={adicionarUsuario}/>
      <hr/>
      <UserList usuarios={usuarios}/>
    </div>
  );
}

export default App;