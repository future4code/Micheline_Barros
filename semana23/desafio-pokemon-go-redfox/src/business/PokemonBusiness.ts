import { NotFoundError } from "../error/NotFoundError";
import { PokemonData } from '../data/PokemonData';

export class PokemonBusiness{

    async getPokemonBusiness(offset: number){
       

        const getPokemon = new PokemonData()
        const result = await getPokemon.getPokemonData(offset)
       
        return result

    }

    async getPokemonByIdBusiness(id: number){
        if(!id){
            throw new NotFoundError("Not found")
        }

        const getPokemonId = new PokemonData()
        const result = await getPokemonId.getPokemonByIdData(id)
       
        return result

    }

    async getPokemonFilterOrderPageBusiness(nameOrtype: string, sort: string, order: string, offset: number){

        const getPokemonId = new PokemonData()
        const result = await getPokemonId.getPokemonFilterOrderPageData(nameOrtype as string, sort as string, order as string, offset)
       
        return result

    }
    
}