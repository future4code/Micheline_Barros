import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { baseUrl } from '../constants/urls';
import useRequestData from '../hooks/useRequestData';
import useProtectedPage from '../hooks/useProtectdPage';
import styled from 'styled-components'

const ContainerViagem = styled.div `
    display: flex;
    justify-content:space-between;
    align-items:center;
    width: 500px;
    box-shadow: #5FCFD5 0px 4px 8px 0px;
    padding: 10px;
    margin-top: 20px;
`

export default function AdminHomePage(){
   

    useProtectedPage()

    const history = useHistory();

    const goBack = () => {
        history.goBack()
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
        <>
            <div>
                <button onClick = {goBack} >VOLTAR</button><button onClick = {null} >CRIAR VIAGEM</button><button onClick = {null} >LOGOUT</button>
            </div>
            <p>AdminHomePage</p>
            {listaViagens}
        </>
    );
}