import React from 'react'
import {useHistory} from 'react-router-dom'



export default function HomePage(){
    const history = useHistory()
    const goToListTrips = () => {
        history.push('/trips/list')
    }

    const goToAdmin = () => {
        history.push('/admin/trips/list')
    }

    return(
        <>
         <p>HomePage</p>
         <button onClick = {goToListTrips}>VIAGENS</button><button onClick = {goToAdmin}>ÁREA DE LOGIN</button>
      
        </>
    );
}