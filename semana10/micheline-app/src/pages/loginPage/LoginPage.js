import axios from 'axios'
import React from 'react'
import {useHistory} from 'react-router-dom'
import { baseUrl } from '../../constants/urls'
import useForm from '../../hooks/useForm'
import { Button } from "@chakra-ui/react";
import styled, { Form, DivContainer, Input, DivBotaoVoltar, ContainerLogin } from './styled';



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
        <DivContainer>
            <DivBotaoVoltar>
                <Button onClick = {goHome} colorScheme="none"  border= '1px' borderColor="white">VOLTAR</Button>
            </DivBotaoVoltar>
        <ContainerLogin>
            <div>
                <Form onSubmit={ login }>
                    <Input name='email' placeholder='E-mail' value={ form.email } onChange={ onChange } pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="example@gmail.com" required/>
                    <Input name='password' placeholder='senha' value={ form.password } onChange={ onChange }  required/>
                    <br />
                    <button>LOGIN</button>
                </Form>
            </div>
            
            <div>
                 <img src='/09.jpg' width='400px'/>
            </div>
           
        </ContainerLogin>
       
        </DivContainer>
    );
}