import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { PageContainer, ImputContainer } from './styled';
import { SignUp } from '../../services/user';
import { useHistory } from 'react-router-dom';

const SignUpForm = ({anchorEl, setAnchorEl}) => {
    const [ form, onChange, clear ] = useForm({username:'', email:'', password:''});

    const history = useHistory();
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(form)
        SignUp(form, clear, history, setAnchorEl)
        
    }


    return(
        <PageContainer>
            <ImputContainer>
                <form onSubmit={ onSubmitForm }>
                <TextField 
                        name = { 'username' }
                        value = { form.username }
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