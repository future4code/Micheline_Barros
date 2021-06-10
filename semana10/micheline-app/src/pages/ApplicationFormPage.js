import React from 'react'
import {useHistory} from 'react-router-dom'



export default function ApplicationFormPage(){
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return(
        <>
        <button onClick = {goBack} >VOLTAR</button><button onClick = {null} >ENVIAR</button>
        <p>ApplicationFormPage - formulário para se candidatar as viagens</p>
        </>
    );
}