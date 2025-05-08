import React from 'react';
import logo from './logo.png'
import { useState } from 'react';
import './App.css';

function App() {

  // Hook - função que permite adicionar estado a um componente é igual a um save-state.
  const [usuario, setUsuario] = useState('');
  // CORRIGIDO: Inicializa o estado 'usuarios' com um array de strings
  const [usuarios, setUsuarios] = useState(['Sofia', 'Lukas', 'Lipe']);

  const adicionarUsuario = () => {
    // Verifica se o nome de usuário não está vazio antes de adicionar
    if (!usuario.trim()) {
      alert('Por favor, digite um nome de usuário.');
      return;
    }
    // Verifica se o usuário já existe na lista (agora 'usuarios' é um array)
    if (usuarios.includes(usuario.trim())) { // Use trim() para remover espaços em branco extras
      alert(`Usuário "${usuario.trim()}" já existe na lista.`);
      return;
    }
    // Adicionando novo usuário na lista (agora 'usuarios' é um array).
    // Use trim() antes de adicionar para evitar nomes com apenas espaços
    setUsuarios([...usuarios, usuario.trim()]);
    // Limpa o campo de entrada.
    setUsuario('');
  }

  return (
    <div className='App'>
      <img src={logo} alt="Background" />
      <hr/>
      <h2>Adicionar usuários</h2>
      <input
        type='text'
        placeholder='Digite o nome do usuário'
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        />

        <button onClick={adicionarUsuario}>Adicionar</button>
        <hr/>
        <h2>Lista de usuários</h2>
        <ol>
          {/* Usa o método map em um array */}
          {usuarios.map((user, index) => (<li key={index}>{user}</li>))}
        </ol>
    </div>
  );
}

export default App;