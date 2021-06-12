import React from 'react'
import {useHistory} from 'react-router-dom'
import { baseUrl } from '../constants/urls'
import useRequestData from '../hooks/useRequestData'





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
        return <div>
            <p>Nome: {destino.name}</p>
            <p>Descrição: {destino.description}</p>
            <p>Planeta: {destino.planet}</p>
            <p>Duração: {destino.durationInDays}</p>
            <p>Data: {destino.date}</p>
            <br />
        </div>
        
    })
    

    return(
        <div>
            <button onClick = {goBack}>VOLTAR</button>
            <button onClick = {goToForm}>INSCREVER-SE</button>
            <p>ListTripsPage</p>
            {listaViagens}
        </div>
    );
}