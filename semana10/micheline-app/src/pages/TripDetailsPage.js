import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectdPage';
import axios from 'axios';
import { baseUrl } from '../constants/urls';



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
            console.log('res',res)
            setTrips(res.data.trip)
            setCandidatoAprovado(res.data.trip.approved)
            console.log('aproved candi',res.data.trip.approved)
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    useEffect (() => {
        getTripDetail()
    }, [])

    
        const candidatos = trips.candidates && trips.candidates.map((candidato) => {
            // if(mensagem === 'sucesso'){
            //     return(
            //         <li>{candidato.name}</li>
            //     )
            // }
            return(
                <>
                    <p>Name: {candidato.name}</p>
                    <p>Idade: {candidato.age}</p>
                    <p>Profissão: {candidato.profession}</p>
                    <p>Descrição: {candidato.applicationText}</p>
                    <p>Nacionalidade: {candidato.country}</p>
                    <button onClick={() => aprova(candidato.id)}>Aprovar</button>
                    <button onClick={() => reprova(candidato.id)}>Reprovar</button>
                    <hr />
                </>
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
            console.log('aprovado',res)
            getTripDetail();
            alert('registrado com sucesso')
        }).catch((err) => {
            console.log(err.response.data)
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
            console.log(res.data)
            getTripDetail();
            alert('registrado com sucesso')
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

   
    return(
        <div>
        <button onClick = {goBack} >VOLTAR</button>
        <p>TripDetailsPage - detalhe de uma viagem e candidatos</p>
        <div>
            {trips && <h3>{trips.name}</h3>}
            {trips && <p><strong>{trips.planet}: </strong>{trips.description}</p>}
            {trips && <p>Duração: {trips.durationInDays} dias</p>}
            {trips && <p>Data prevista: {trips.date}</p>}
        </div>
        <div>
            <hr/>
            {candidatos}
            <h2>Lista de Aprovados</h2>
            {candidatoAprovado && candidatoAprovado.map((candidato)=>{
             return<p key={candidato.id}>Nome: {candidato.name}</p>
            })}
           
        </div>

        </div>
    );
}