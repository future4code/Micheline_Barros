import React from 'react'
import {useHistory} from 'react-router-dom'



export default function ApplicationFormPage(){
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const enviar = (e) => {
        e.preventDefault()
        console.log('estou funcionando')
    }

    return(
        <>
        <button onClick = {goBack} >VOLTAR</button>
        <p>ApplicationFormPage - formulário para se candidatar as viagens</p>
        <form onSubmit={enviar}>
            <select>
                <option value='Viagem'>Viagem</option>
            </select>
            <br />
            <input placeholder={'Nome'} pattern='[a-z]{3,}' title="" required/>
            <br />
            <input placeholder={'Idade'} type="number" min="18"/>
            <br />
            <input placeholder={'Texto de Candidatura'}/>
            <br />
            <input placeholder={'Profissão'}/>
            <br />
            <select>
            <option value='Escolha o País'>Escolha o País</option>
            </select>
            <br/>
            <button>ENVIAR</button>
        </form>
        
        </>
    );
}