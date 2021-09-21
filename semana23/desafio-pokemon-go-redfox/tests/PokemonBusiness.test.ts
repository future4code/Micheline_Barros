import { PokemonData } from '../src/data/PokemonData';
import { PokemonBusiness } from '../src/business/PokemonBusiness';
import { PokemonDataMock } from './mocks/PokemonDataMock';

const pokemonBusinessMock = new PokemonBusiness(
    new PokemonDataMock() as PokemonData
)

describe("Testando o getPokemonById", () => {

    test("Deve retornar um erro quando for passado um id inválido", async() => {
        expect.assertions(2);

        try {
            await pokemonBusinessMock.getPokemonById(23);
            
        } catch (error) {
            expect(error.message).toEqual("Not found");
        
        }
    })
})