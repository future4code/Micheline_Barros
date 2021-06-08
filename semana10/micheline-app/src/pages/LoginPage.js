import React from 'react'
import {useHistory} from 'react-router-dom'



export default function LoginPage(){
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return(
        <>
         <button onClick = {goBack} >VOLTAR</button><button onClick = {null} >LOGIN</button>
        <p>LoginPage</p>
        </>
    );
}