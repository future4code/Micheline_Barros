import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Img = styled.img `
width: 300px;
height:350px;
`
const urlBase = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/micheline/";

function TelaPerfis(props) {
    const [perfilUsuario, setPerfilUsuario] = useState({})
    const [match, setMatch] = useState()

    useEffect(() => {
        getProfileToChoose()
    }, [])

    useEffect(() => {
        if(match){
            getProfileToChoose()
        }
    }, [match])

    const getProfileToChoose = () => {
        axios.get(`${urlBase}person`).then((res) => {
            console.log('perfil', perfilUsuario)
            setPerfilUsuario(res.data.profile)
            console.log('entrei')
        }).catch((err) => {
            console.log(err)
        })
    }


    const choosePersonMatch = (id) => {
        const header = {
                'Content-Type': 'application/json'
        }
        const body = {
            id: id,
            choice: true,
        }
        console.log('body', body)
        axios.post(`${urlBase}choose-person`, body, header).then((res) => {
            setMatch(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    const choosePersonNoMatch = (id) => {
        const header = {
                'Content-Type': 'application/json'
        }
        const body = {
            id: {id},
            choice: false,
        }
        axios.post(`${urlBase}choose-person`, body, header).then((res) => {
            setMatch(res.data)
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        <button onClick={props.telaMatches}>TelaMatches</button>
        <hr />
        <Img src={perfilUsuario.photo}/>
        <p>{perfilUsuario.name}</p>
        <p>{perfilUsuario.age} anos</p>
        <p>{perfilUsuario.bio}</p>
        <button onClick={()=>choosePersonMatch(perfilUsuario.id)}>match</button>
        <button onClick={()=>choosePersonNoMatch(perfilUsuario.id)}>!match</button>
    </div>
  );
}

export default TelaPerfis;
