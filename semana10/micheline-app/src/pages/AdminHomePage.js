import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../constants/urls'
import useProtectedPage from '../hooks/useProtectdPage'


export default function AdminHomePage(){
    const [ trips, setTrips ] = useState({})

    useProtectedPage()

    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    const getTripDetail = (id) => {
        axios.get( `${baseUrl}/trip/${id}`, {
            headers : {
                auth: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    useEffect (() => {
        getTripDetail()
    }, [])

    return(
        <>
        <button onClick = {goBack} >VOLTAR</button><button onClick = {null} >CRIAR VIAGEM</button><button onClick = {null} >LOGOUT</button>
        <p>AdminHomePage</p>
        </>
    );
}