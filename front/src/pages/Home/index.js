// src\pages\Home\index.js

import Home from '../../components/'
import './styles.css'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return(
        <div className='pagina-home'>
            <Home/>
            <button onClick={() => navigate('/cadastro')} className='link-cadastrar'>
                    Cadastrar Jogador
            </button>
            <button onClick={() => navigate('/jogadores')} className='link-cadastrar'>
                    Ver Jogadores Cadastrados
            </button>
        </div>
    )
}

export default Home