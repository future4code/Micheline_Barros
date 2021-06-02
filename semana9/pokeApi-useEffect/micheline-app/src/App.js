import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, { ThemeConsumer } from 'styled-components'
import PokeCard from './components/PokeCard/PokeCard'


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
    console.log('pokeName',pokeName)
  }

  return (
    
    <>
      <select onChange={onChangeSelectPokeName}>
        <option value=''></option>
        {pokeList.map((pokemon) => {
          console.log('nomes',pokemon.name)
          return(
            <option key={pokemon.id} value={pokemon.name}>{pokemon.name}</option>
          )
        })}
      </select>
      {/* {pokeName && <PokeCard pokemon={pokeName}/>} */}
      
    </>
  );
}

export default App;
