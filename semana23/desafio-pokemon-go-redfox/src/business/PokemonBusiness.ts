import { NotFoundError } from "../error/NotFoundError";
import { PokemonData } from '../data/PokemonData';

export class PokemonBusiness{
 constructor(
     private pokemonData: PokemonData
 ){}
    async getPokemon(offset: number, sort: string, order: string){
       
        const result = await this.pokemonData.getPokemon(offset, sort, order)
       
        return result

    }

    async getPokemonById(id: number){
        if(!id){
            throw new NotFoundError("Not found")
        }

        const result = await this.pokemonData.getPokemonById(id)
       
        return result

    }

    async getPokemonFilterOrderPage(nameOrtype: string, sort: string, order: string, offset: number){

        const result = await this.pokemonData.getPokemonFilterOrderPage(nameOrtype as string, sort as string, order as string, offset)
       
        return result

    }
    
}

// export default new PokemonBusiness()