import React, { useState, useEffect, props, prevProps } from 'react'
import axios from 'axios'
import styled  from 'styled-components'


function PokeCard(){
    const [pokemon, setPokemon] = useState({})

    useEffect(() =>{
        selecionaPokemon(props.pokemonDados)
    }, [])

    useEffect((prevProps) =>{
        if(prevProps.pokemon !== props.pokemon){
            selecionaPokemon(props.pokemon)
        }
    }, [prevProps, props.pokemon])

    const selecionaPokemon = (pokeName) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
          setPokemon(res.data)
      })
      .catch((err) => {
          console.log(err)
      })
    }

    const pokemonCard = pokemon;
    return(
        <div>
            <p>{pokemonCard.name}</p>
            <p>{pokemonCard.name}</p>
            {pokemonCard.types && <p>{pokemonCard.types[0].type.name}</p>}
            {pokemonCard.sprites && (
                <img src={pokemonCard.sprites.front_default} alt={pokemonCard.name} />
            )}

        </div>
    )
}
export default PokeCard;