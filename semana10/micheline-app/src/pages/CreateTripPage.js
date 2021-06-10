import React from 'react'
import {useHistory} from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectdPage'


export default function CreateTripPage(){
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    useProtectedPage ();

    return(
        <>
        <button onClick = {goBack} >VOLTAR</button><button onClick = {null} >CRIAR</button>
        <p>CreateTripPage - form para criar viagens</p>
        </>
    );
}