import { Pokemon, PokemonOutputDTO} from "../../src/model/Pokemon";
   

export const Bulbasaur = new Pokemon(
    1, 
    "Bulbasaur", 
    1, 
    "10", 
    "1", 
    "water",
     "fire", 
     1, 
     1, 
     1, 
     "1", 
     0, 
     1,
      1
)


export const Ivysaur = new Pokemon(
    2, 
    "Ivysaur", 
    1, 
    "10", 
    "1", 
    "water",
     "fire", 
     1, 
     1, 
     1, 
     "1", 
     0, 
     1,
      1
)

export const getPokemonMock: PokemonOutputDTO ={
    id: 1,
    name: "Ivysaur",
    generation: 1,
    evolutionStage: "1",
    familyId: "1",
    type1: "1",
    type2: "1",
    statTotal:1,
    atk: 1,
    sta: 1,
    legendary: 1,
    cp40: 1,
    cp39: 1
}  
