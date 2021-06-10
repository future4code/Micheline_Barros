import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectdPage';
import axios from 'axios';
import { baseUrl } from '../constants/urls';



export default function TripDetailsPage(){
    const [ trips, setTrips ] = useState({})
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
            console.log(res)
            setTrips(res.data.trip)
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    useEffect (() => {
        getTripDetail()
    }, [])

    console.log('trips',trips)

    return(
        <div>
        <button onClick = {goBack} >VOLTAR</button>
        <p>TripDetailsPage - detalhe de uma viagem e candidatos</p>
        {trips && <h3>{trips.name}</h3>}
        {trips && <p><strong>{trips.planet}: </strong>{trips.description}</p>}
        {trips && <p>Duração: {trips.durationInDays} dias</p>}
        {trips && <p>Data prevista: {trips.date}</p>}
        </div>
    );
}