import React from 'react'
import {useHistory} from 'react-router-dom'


export default function CreateTripPage(){
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return(
        <>
        <button onClick = {goBack} >VOLTAR</button><button onClick = {null} >CRIAR</button>
        <p>CreateTripPage</p>
        </>
    );
}