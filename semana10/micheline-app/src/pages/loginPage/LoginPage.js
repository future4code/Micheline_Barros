import axios from 'axios'
import React from 'react'
import {useHistory} from 'react-router-dom'
import { baseUrl } from '../../constants/urls'
import styled from 'styled-components';
import useForm from '../../hooks/useForm'

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
    const { form, onChange, cleanFields } = useForm ( { email:'', password:'' })
   
    const history = useHistory()

    const goHome = () => {
        history.push('/')
    }
    
    const login = (e) => {
        e.preventDefault();
        const body = { 
            email: form.email,
            password: form.password
         };
        axios.post( `${baseUrl}/login`, body ).then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/admin/trips/list")
            console.log(res.data.token)
            cleanFields();
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }


    return(
        <>
        <div>
            <button onClick = {goHome} >VOLTAR</button>
        </div>
        <ContainerLogin>
            <div>
                <form onSubmit={ login }>
                    <input name='email' placeholder='E-mail' value={ form.email } onChange={ onChange } pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="example@gmail.com" required/>
                    <input name='password' placeholder='senha' value={ form.password } onChange={ onChange }  required/>
                    <button>LOGIN</button>
                </form>
            </div>
            
            <div>
                 <img src='/09.jpg' width='400px'/>
            </div>
           
        </ContainerLogin>
       
        </>
    );
}