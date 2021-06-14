import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useRequestData( url, initialState ) {
    const [ data, setData] = useState ( initialState ) 

    const requisicaoGet = () => {
        axios.get (url).then((res) => {
           setData( res.data )
        }).catch((err) => {
            alert( err.response.data )
        })
    };
    useEffect(() => { 
        requisicaoGet();
    }, []);

    return data

   

    
}