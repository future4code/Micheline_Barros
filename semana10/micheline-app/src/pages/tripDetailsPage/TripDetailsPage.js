import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectdPage';
import axios from 'axios';
import { baseUrl } from '../../constants/urls';
import { Button } from "@chakra-ui/react";
import styled, { Form, DivContainer, DivBotaoSelicao, Select, ContainerAprovados, DivBotao, ContainerViagem, DivBotaoVoltar } from './styled';



export default function TripDetailsPage(){
    const [ trips, setTrips ] = useState({})
    const [ candidatoAprovado, setCandidatoAprovado ] = useState ('')
    

    const params = useParams();

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    useProtectedPage ();

    const getTripDetail = (id) => {
        axios.get( `${baseUrl}/trip/${params.id}`, {
            headers : {
                auth: localStorage.getItem("token")
            }
        }).then((res) => {
            setTrips(res.data.trip)
            setCandidatoAprovado(res.data.trip.approved)
        }).catch((err) => {
            alert(err.response.data)
        })
    }

    useEffect (() => {
        getTripDetail()
    }, [])

    
        const candidatos = trips.candidates && trips.candidates.map((candidato) => {
            return(
                <ContainerAprovados>
                    <p>Name: {candidato.name}</p>
                    <p>Idade: {candidato.age}</p>
                    <p>Profissão: {candidato.profession}</p>
                    <p>Descrição: {candidato.applicationText}</p>
                    <p>Nacionalidade: {candidato.country}</p>
                    <DivBotaoSelicao>
                        <Button onClick={() => aprova(candidato.id)} colorScheme="none"  border= '1px' borderColor="white">Aprovar</Button>
                        <Button onClick={() => reprova(candidato.id)} colorScheme="none"  border= '1px' borderColor="white">Reprovar</Button>
                    </DivBotaoSelicao>
                </ContainerAprovados>
            )
        })

    

    const aprova = (id) => {
        const body = {
            approve: true
        };
        axios.put(`${baseUrl}/trips/${params.id}/candidates/${id}/decide`, body, {
            headers : {
                auth: localStorage.getItem("token")
            }
        }).then((res) => {
            getTripDetail();
            alert('registrado com sucesso')
        }).catch((err) => {
            alert(err.response.data)
        })
    }

    const reprova = (id) => {
        const body = {
            approve: false
        };
        axios.put(`${baseUrl}/trips/${params.id}/candidates/${id}/decide`, body, {
            headers : {
                auth: localStorage.getItem("token")
            }
        }).then((res) => {
            alert(res.data)
            getTripDetail();
            alert('registrado com sucesso')
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

   
    return(
        <DivContainer>
            <div>
                <Button onClick = {goBack} colorScheme="none"  border= '1px' borderColor="white">VOLTAR</Button>
            </div>   
                <h3>DETALHES</h3>
                <ContainerViagem>
                    {trips && <p>{trips.name}</p>}
                    {trips && <p><strong>{trips.planet}: </strong>{trips.description}</p>}
                    {trips && <p>Duração: {trips.durationInDays} dias</p>}
                    {trips && <p>Data prevista: {trips.date}</p>}
                </ContainerViagem>
                <div>
                   
                {candidatos}

                <h3>Aprovados</h3>
                <hr />
                {candidatoAprovado && candidatoAprovado.map((candidato)=>{
                return <ContainerAprovados>
                    <p key={candidato.id}>Nome: {candidato.name}</p>
                    </ContainerAprovados>
                
                })}
                </div>

        </DivContainer>
    );
}