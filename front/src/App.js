import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import CadastroJogador from './pages/Cadastro';
import ListaJogadores from './pages/Lista';
import './App.css'; // Para estilos globais, se necessário

function App() {
  return (
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/cadastro" element={<CadastroJogador />} />
      <Route path="/jogadores" element={<ListaJogadores />} />
    </Routes>
      </BrowserRouter>
    );
}

export default App;