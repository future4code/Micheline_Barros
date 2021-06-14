import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { baseUrl } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectdPage';
import styled, { ContainerViagem, DivBotao, H3, DivContainer } from './styled';
import { Button } from "@chakra-ui/react"
import axios from 'axios'




export default function AdminHomePage(props){
    const [ listTrips, setListTrips] = useState([])

    useProtectedPage()

    const history = useHistory();

    const goHome = () => {
        history.push('/')
    }

    const goCreateTrip = () => {
        history.push('/admin/trips/create')
    }

    const getTrips = () => {
        axios.get(`${baseUrl}/trips`).then((res) => {
            setListTrips(res.data)
        }).catch((err) => {
            alert(err.response.data)
        })
    }

    useEffect(() => { 
        getTrips();
    }, []);

   
    const goToDetails = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const deletar = (id) => {
        axios.delete(`${baseUrl}/trips/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((res) => {
            alert('Viagem deletada com sucesso')
            getTrips();
    }).catch((err) => {
            alert(err.response.data)
        })
    }

    const logout = () =>{
        localStorage.removeItem("token");
        history.push('/login')
      }


    
 
    const listaViagens = listTrips.trips && listTrips.trips.map((destino) => {
        return (
            <div key={destino.id}>
                <ContainerViagem>
                    <p><button onClick={() => goToDetails ( destino.id )}>{destino.name}</button></p>
                    <button onClick={() => deletar ( destino.id )}>delete</button>
                </ContainerViagem>
            </div>
        )
    })

    return(
        <DivContainer>
            <DivBotao>
                <Button onClick = {goHome} colorScheme="none"  border= '1px' borderColor="white" variant="solid">VOLTAR</Button>
                <Button onClick = {goCreateTrip} colorScheme="none"  border= '1px' borderColor="white" variant="solid">CRIAR VIAGEM</Button>
                <Button onClick = {logout} colorScheme="none"  border= '1px' borderColor="white" variant="solid">LOGOUT</Button>
            </DivBotao>
            <H3>VIAGENS</H3>
            {listaViagens}
        </DivContainer>
    );
}