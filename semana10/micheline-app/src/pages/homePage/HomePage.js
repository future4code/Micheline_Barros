import React from 'react'
import {useHistory} from 'react-router-dom'
import styled, { DivContainer, DivBotao, DivImg } from './styled'
import { Button } from "@chakra-ui/react"



export default function HomePage(){
    const history = useHistory()
    
    const goToListTrips = () => {
        history.push('/trips/list')
    }

    const goToLogin = () => {
        history.push('/admin/trips/list')
    }

    return(
        <> 
        <DivContainer>
         <DivImg>
             <img src="Logo.png"/>
         </DivImg>
         
        
            <DivBotao>
                <Button onClick = {goToListTrips} colorScheme="none"  border= '1px' borderColor="white" variant="solid">VIAGENS</Button>
                <Button onClick = {goToLogin} colorScheme="none"  border= '1px' borderColor="white" variant="solid">ÁREA ADMIN</Button>
            </DivBotao>
         
        </DivContainer>
      
        </>
    );
}