import React from 'react'
import {useHistory} from 'react-router-dom'


export default function AdminHomePage(){
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return(
        <>
        <button onClick = {goBack} >VOLTAR</button><button onClick = {null} >CRIAR VIAGEM</button><button onClick = {null} >LOGOUT</button>
        <p>AdminHomePage</p>
        </>
    );
}