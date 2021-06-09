import React from 'react'
import {useHistory} from 'react-router-dom'



export default function HomePage(){
    const history = useHistory()
    const goToListTrips = () => {
        history.push('/trips/list')
    }

    const goToLogin = () => {
        history.push('/login')
    }

    return(
        <>
         <p>HomePage</p>
         <div>
             <img src="Logo.png" width='500px'/>
         </div>
         
         <button onClick = {goToListTrips}>VIAGENS</button><button onClick = {goToLogin}>ÁREA DE LOGIN</button>
      
        </>
    );
}