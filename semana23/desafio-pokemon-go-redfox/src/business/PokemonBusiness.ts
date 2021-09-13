import { NotFoundError } from "../error/NotFoundError";
import { PokemonData } from '../data/PokemonData';

export class PokemonBusiness{

    async getPokemonId(id: number){
        if(!id){
            throw new NotFoundError("Not found")
        }

        const getPokemonId = new PokemonData()
        const result = await getPokemonId.getPokemonIdData(id)
       
        return result

    }
}