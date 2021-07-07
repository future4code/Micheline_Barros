import React from 'react';
import { Button } from '@material-ui/core';
import { PageContainer, SignUpContainer } from './styled'
import SignUpForm from './SignUpForm';
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';


const SignUpPage = ({anchorEl, setAnchorEl}) => {
    const history = useHistory();
    useUnprotectedPage();

    return(
        <PageContainer>
        <SignUpForm anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
        <SignUpContainer>
        <Button onClick={()=> goToLogin(history)} type={'submit'} fullWidth variant="text" color="secondary"  >Já possui conta? Fazer login</Button>
        </SignUpContainer>
    </PageContainer>
    )
}

export default SignUpPage