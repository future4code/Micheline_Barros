import axios from 'axios'
import React from 'react'
import {useHistory} from 'react-router-dom'
import { baseUrl } from '../constants/urls'
import useInput from '../hooks/useInput'
import styled from 'styled-components';

const ContainerLogin = styled.div `
    display: flex;
    div{
        display: flex;
        flex-direction: column;
        padding:20px;
        margin: auto;
    }
`

export default function LoginPage(){
    const [email, handleEmail] = useInput('')
    const [password, handlepassword] = useInput('')
    const history = useHistory()
    
    const login = () => {
        const body = { email, password};
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
        <div>
            <button onClick = {goBack} >VOLTAR</button>
        </div>
        <ContainerLogin>
            <div>
                <input placeholder='E-mail' value={ email } onChange={ handleEmail }/>
                <input placeholder='senha'value={ password } onChange={ handlepassword }/>
                <button onClick={ login }>LOGIN</button>
            </div>
            
            <div>
                 <img src='/09.jpg' width='400px'/>
            </div>
           
        </ContainerLogin>
       
        </>
    );
}