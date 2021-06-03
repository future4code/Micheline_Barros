import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Img = styled.img `
width: 300px;
height:350px;
`
const urlBase = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/micheline/";

function TelaPerfis() {
    const [perfilUsuario, setPerfilUsuario] = useState({})
    const [match, setMatch] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])

    // useEffect(() => {
    //     if(){
    //         getProfileToChoose()
    //     }
    // }, [perfilUsuario])

    const getProfileToChoose = () => {
        axios.get(`${urlBase}person`).then((res) => {
            console.log('perfil', perfilUsuario)
            setPerfilUsuario(res.data.profile)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        choosePerson(perfilUsuario.id)
    }, [perfilUsuario.id])

    const choosePerson = (id) => {
        const header = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const body = {
            id: {id},
            choice: true,
        }
        console.log('id2', id)
        axios.post(`${urlBase}choose-person`, body, header).then((res) => {
            console.log('res', res.data)
            setMatch(res.data)
            console.log('status', res.status)
            console.log('id1', id)
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        <button>TelaMatches</button>
        <hr />
        <Img src={perfilUsuario.photo}/>
        <p>{perfilUsuario.name}</p>
        <p>{perfilUsuario.age} anos</p>
        <p>{perfilUsuario.bio}</p>
        <button onClick={()=>choosePerson(perfilUsuario.id)}>match</button>
        <button>!match</button>
    </div>
  );
}

export default TelaPerfis;
