import React from 'react';
import { Button } from '@material-ui/core';
import { PageContainer, SignUpContainer } from './styled'
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = ({anchorEl, setAnchorEl}) => {
    const history = useHistory()
    useUnprotectedPage();

    return(
        <PageContainer>
            <LoginForm  anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
            <SignUpContainer>
                <Button onClick={()=> goToSignUp(history)} type={'submit'} fullWidth variant="text" color="secondary"  >Não possui conta? Cadastre-se</Button>
            </SignUpContainer>
        </PageContainer>
    )
}

export default LoginPage