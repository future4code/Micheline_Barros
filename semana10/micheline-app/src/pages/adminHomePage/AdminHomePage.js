import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { baseUrl } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import useProtectedPage from '../../hooks/useProtectdPage';
import styled, { ContainerViagem, DivBotao, H3, DivContainer } from './styled';
import { Button } from "@chakra-ui/react"





export default function AdminHomePage(){
    useProtectedPage()

    const history = useHistory();

    const goHome = () => {
        history.push('/')
    }

    const goCreateTrip = () => {
        history.push('/admin/trips/create')
    }

    const listTrips = useRequestData( `${baseUrl}/trips`, [] )
    console.log (listTrips)

    const goToDetails = (id) => {
        history.push(`/admin/trips/${id}`)
        console.log(id,"id")
    }

    const listaViagens = listTrips.trips && listTrips.trips.map((destino) => {
        return (
            <div>
                <ContainerViagem>
                    <p><button onClick={() => goToDetails ( destino.id )}>{destino.name}</button></p>
                </ContainerViagem>
            </div>
        )
    })

    return(
        <DivContainer>
            <DivBotao>
                <Button onClick = {goHome} colorScheme="none"  border= '1px' borderColor="white" variant="solid">VOLTAR</Button>
                <Button onClick = {goCreateTrip} colorScheme="none"  border= '1px' borderColor="white" variant="solid">CRIAR VIAGEM</Button>
                <Button onClick = {null} colorScheme="none"  border= '1px' borderColor="white" variant="solid">LOGOUT</Button>
            </DivBotao>
            <H3>VIAGENS</H3>
            {listaViagens}
        </DivContainer>
    );
}