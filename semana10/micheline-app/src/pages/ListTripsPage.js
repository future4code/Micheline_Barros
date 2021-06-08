import React from 'react'
import {useHistory} from 'react-router-dom'



export default function ListTripsPage(){
    const history = useHistory()

    const goToForm = () => {
        history.push('/trips/application')
    }

    const goBack = () => {
        history.goBack()
    }

    return(
        <>
        <button onClick = {goBack}>VOLTAR</button><button onClick = {goToForm}>INSCREVER-SE</button>
        <p>ListTripsPage</p>
        </>
    );
}