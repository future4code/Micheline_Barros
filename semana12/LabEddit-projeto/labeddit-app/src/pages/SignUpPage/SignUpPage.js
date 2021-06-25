import React from 'react';
import { Button } from '@material-ui/core';
import { PageContainer, SignUpContainer } from './styled'
import SignUpForm from './SignUpForm';
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/coordinator'


const SignUpPage = () => {
    const history = useHistory() 

    return(
        <PageContainer>
        <SignUpForm />
        <SignUpContainer>
        </SignUpContainer>
    </PageContainer>
    )
}

export default SignUpPage