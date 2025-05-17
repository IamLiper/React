// src\components\ListaDeJogadores\index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'

function ListaDeJogadores() {
    const [Jogadores, setJogadores] = useState([])

    useEffect(() => {
        const carregarJogadores = async () => {
            try {
                const response = await axios.get('http://localhost:8080/jogadores')
                setJogadores(response.data)
            } catch (error) {
                alert('Erro ao buscar jogadores: ', error)
                setJogadores([])
            }
        }
        carregarJogadores()
    }, [])

    return (
        <ul id="listaJogadores" className="lista-jogadores">
            {Jogadores.length === 0 ? (
                <li>Nenhum usuário encontrado.</li>
            ) : (
                Jogadores.map( jogadores => (
                    <li key={jogadores.id}>
                        <strong>Nome: </strong> {jogadores.nome}<br />
                        <strong>Sexo: </strong> {jogadores.sexo}<br />
                        <strong>Idade: </strong> {jogadores.idade}<br />
                        <strong>Altura: </strong> {jogadores.altura}<br />
                        <strong>Peso: </strong> {jogadores.peso}<br />
                        <strong>Posicao: </strong> {jogadores.posicao}<br />
                        <strong>NmrDaCamisa: </strong> {jogadores.nmrDaCamisa}<br />
                                
                    </li>
                ))
            )}
        </ul>
    )
    
}

export default ListaDeJogadores