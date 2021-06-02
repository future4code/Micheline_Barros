import React, { useState, useEffect, prevProps} from 'react'
import axios from 'axios'
import styled  from 'styled-components'

const Img = styled.img `
width:200px;
`

function PokeCard(props){
    const [pokemons, setPokemons] = useState({})

    useEffect(() =>{
        selecionaPokemon(props.pokemon)
    }, [props.pokemon])


    const selecionaPokemon = (pokeName) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
          setPokemons(res.data)
          console.log('setPokemons', res.data)
      })
      .catch((err) => {
          console.log(err)
      })
    }

    const pokemonCard = pokemons;
    return(
        <div>
            <p>Nome: {pokemonCard.name}</p>
            {pokemonCard.types && <p>Tipo: {pokemonCard.types[0].type.name}</p>}
            {pokemonCard.sprites && (
                <Img src={pokemonCard.sprites.front_default} alt={pokemonCard.name} />
            )}

        </div>
    )
}
export default PokeCard;