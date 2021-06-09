import axios from 'axios'
import React from 'react'
import {useHistory} from 'react-router-dom'
import { baseUrl } from '../constants/urls'
import useInput from '../hooks/useInput'



export default function LoginPage(){
    const [email, handleEmail] = useInput('')
    const [password, handlepassword] = useInput('')
    const history = useHistory()
    
    const login = () => {
        const body = { email, password};
        // console.log(body)
        axios.post(`${baseUrl}/login`, body).then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/admin/trips/list")
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }


    const goBack = () => {
        history.goBack()
    }

    

    return(
        <>
         <button onClick = {goBack} >VOLTAR</button>
        <p>Login Page</p>
        <input placeholder='E-mail' value={ email } onChange={ handleEmail }/>
        <input placeholder='senha'value={ password } onChange={ handlepassword }/>
        <button onClick={ login }>LOGIN</button>
        </>
    );
}