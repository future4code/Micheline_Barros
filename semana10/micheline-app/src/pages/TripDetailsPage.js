import React from 'react'
import {useHistory} from 'react-router-dom'


export default function TripDetailsPage(){
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return(
        <>
        <button onClick = {goBack} >VOLTAR</button>
        <p>TripDetailsPage</p>
        </>
    );
}