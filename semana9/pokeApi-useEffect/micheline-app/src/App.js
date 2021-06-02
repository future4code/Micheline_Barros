import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, { ThemeConsumer } from 'styled-components'
import PokeCard from './components/PokeCard/PokeCard'

const PokeContainer = styled.div `
 text-align: center;
`

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  useEffect(() => {
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
    <PokeContainer>
      <select onChange={onChangeSelectPokeName}>
        <option value=''></option>
        {pokeList.map((pokemon) => {
          console.log('nomes',pokemon.name)
          console.log('pokeName',pokeName)
          return(
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName}/>}
      
    </PokeContainer>
  );
}

export default App;
