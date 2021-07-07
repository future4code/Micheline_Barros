import React from 'react'
import {useHistory} from 'react-router-dom'
import { baseUrl } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { Button } from "@chakra-ui/react"
import styled, { DivBotao, DivContainer, ContainerViagem } from './styled'


export default function ListTripsPage(){ 
    const history = useHistory()

    const goToForm = (id) => {
        history.push('/trips/application')
    }

    const goBack = () => {
        history.goBack()
    }

    const listTrips = useRequestData( `${baseUrl}/trips`, [] )
    console.log (listTrips)

    const listaViagens = listTrips.trips && listTrips.trips.map((destino) => {
        return <div key={destino.id}>
            <ContainerViagem>
                <p>Nome: {destino.name}</p>
                <p>Descrição: {destino.description}</p>
                <p>Planeta: {destino.planet}</p>
                <p>Duração: {destino.durationInDays}</p>
                <p>Data: {destino.date}</p>
            </ContainerViagem>
        </div>
    
    })
    

    return(
        <>
            <DivContainer>
                <DivBotao>
                    <Button onClick = {goBack} colorScheme="none"  border= '1px' borderColor="white" variant="solid">VOLTAR</Button>
                    <Button onClick = {goToForm} colorScheme="none"  border= '1px' borderColor="white" variant="solid">INSCREVER-SE</Button>
                </DivBotao>
                <h3>VIAGENS PROGRAMADAS</h3>
                <hr/>
                    {listaViagens}
            </DivContainer>
        </>
    );
}