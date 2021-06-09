import React from 'react'
import {useHistory} from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectdPage'


export default function TripDetailsPage(){
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    useProtectedPage ();

    return(
        <>
        <button onClick = {goBack} >VOLTAR</button>
        <p>TripDetailsPage</p>
        </>
    );
}