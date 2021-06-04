import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerMatches = styled.div `
  border: 1px solid purple;
  img{
    width:50px;
    height:50px;
  }
`

const urlBase = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/micheline/'

function TelaMatches(props) {
  const [perfilMatche, setPerfilMatche] = useState ([])
  
  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    axios.get(`${urlBase}matches`).then((res) => {
      setPerfilMatche(res.data.matches)
      console.log(res.data.matches)
    }).catch((err) => {
      console.log(err)
    })
  }

  //tenho que fazer um get para os perfis e um get matche?
  const clear = () => {
    const header = {
      'Content-Type': 'application/json'
    }
    axios.put(`${urlBase}clear`, header).then((res) => {
      console.log(res.data)
      setPerfilMatche([])
      console.log('entrei no clear')
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <div>
       <button onClick={props.telaPerfis}>TelaPerfis</button>
        <hr />
      <p>TelaMatches</p>
      {console.log('perfilMatche', perfilMatche)}
      {perfilMatche.map((perfil) => {
        return(
          <ContainerMatches>
            <img src={perfil.photo} />
            <p>{perfil.name}</p>
          </ContainerMatches>
        )
      })}
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default TelaMatches;