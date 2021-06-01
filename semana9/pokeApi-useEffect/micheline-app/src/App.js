import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, { ThemeConsumer } from 'styled-components'


function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  useEffect(() =>{
    duzentosPokemon()
  },[])

  const duzentosPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=200')
    .then((res) => {
      setPokeList(res.data.results)
      console.log(res.data.results)
    }).catch((err) => {
      console.log(err)
    })
  }

  const onChangeSelectPokeName = (event) => {
    setPokeName(event.target.value)
  }

  return (
    
    <div>
      <select onChange={onChangeSelectPokeName}>
        <option value=''></option>
        {pokeList.map((namePoke) => {
          console.log(namePoke.name)
          return(
            <option value={namePoke.name}>{namePoke.name}</option>
          )
        })}
      </select>
    </div>
  );
}

export default App;
