import React from 'react';
import { ErrorPageContainer, ErrorGif } from './styled'

const ErrorPage = () => {

    return(
           <ErrorPageContainer>
                <ErrorGif src='https://media.giphy.com/media/UHAYP0FxJOmFBuOiC2/giphy.gif' />
            </ErrorPageContainer> 
    )
}

export default ErrorPage