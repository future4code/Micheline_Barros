import React from 'react'
import {useHistory} from 'react-router-dom'


export default function Error(){
    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }

    return(
        <>
        <button onClick = {goToHome} >Home Page</button>
        <img src = "https://media.giphy.com/media/1fnxq0G27SVBN7CBRA/giphy.gif" />
        <h1>ERROR 404</h1>
        </>
    );
}