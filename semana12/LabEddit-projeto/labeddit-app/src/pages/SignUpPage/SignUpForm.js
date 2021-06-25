import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { PageContainer, ImputContainer } from './styled'

const SignUpForm = () => {
    const [ form, onChange, clear ] = useForm({name:'', email:'', password:''});
    
    const onSubmitForm = (e) => {
        console.log(form)
        e.preventDefault()
    }

    return(
        <PageContainer>
            <ImputContainer>
                <form onSubmit={ onSubmitForm }>
                <TextField 
                        name = { 'name' }
                        value = { form.name }
                        onChange = { onChange }
                        label={'Nome'}
                        fullWidth
                        margin={'normal'}
                        required
                        autoFocus
                    />

                    <TextField 
                        name = { 'email' }
                        value = { form.email }
                        onChange = { onChange }
                        label={'E-mail'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={"email"}
                    />

                    <TextField 
                        name = { 'password' }
                        value = { form.password }
                        onChange = { onChange }
                        label={'Senha'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'password'}
                    />
                    <Button type={'submit'} fullWidth variant={"contained" }color={"secondary"}>Cadastrar</Button>
                </form>
            </ImputContainer>
        </PageContainer>
    )
}

export default SignUpForm