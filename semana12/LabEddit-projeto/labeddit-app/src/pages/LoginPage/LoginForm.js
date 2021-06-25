import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { PageContainer, ImputContainer } from './styled';
import { login } from '../../services/user';
import { useHistory } from 'react-router-dom'


const LoginForm = () => {
    const [ form, onChange, clear ] = useForm({email:'', password:''});

    const history = useHistory()
    
    const onSubmitForm = (e) => {
        login(form, clear, history)
        e.preventDefault()
    }

    


    return(
        <PageContainer>
            <ImputContainer>
                <form onSubmit={ onSubmitForm }>
                    <TextField 
                        name = { 'email' }
                        value = { form.email }
                        onChange = { onChange }
                        label={'E-mail'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={"email"}
                        autoFocus
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
                    <Button type={'submit'} fullWidth variant="contained" color="secondary"  >Login</Button>
                </form>
            </ImputContainer>
        </PageContainer>
    )
}

export default LoginForm