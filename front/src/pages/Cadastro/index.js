// src\pages\Cadastro\index.js

import { useNavigate } from 'react-router-dom'
import FormularioCadastro from '../../components/FormularioCadastro'
import './styles.css'

function CadastroJogador() {
    const navigate = useNavigate()
    return (
        <div className='pagina-cadastro'>
            <FormularioCadastro/>
            <button onClick={() => navigate('/')} className='link-voltar'>
                    Home
            </button>
            <button onClick={() => navigate('/jogadores')} className='link-cadastrados'>
                    Ver Jogadores Cadastrados
            </button>
        </div>
    )
}

export default CadastroJogador