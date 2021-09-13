import { NotFoundError } from "../error/NotFoundError";
import { PokemonInputDTO, PokemonOutputDTO } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";

export class PokemonData extends BaseDatabase{

    async getPokemonData(offset: number, sort: string, order: string): Promise<PokemonInputDTO[]>{

        try {
            const result = await this.getConnection()
           .select("*")
           .into(this.TABLE_NAME.Pokemon)
           .limit(15)
           .offset(offset)
           .orderBy(sort,order)

      
            
            if(!result.length){
                throw new NotFoundError("Not found")
            }
     
            return result.map((pokemon: PokemonOutputDTO) => {
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    generation: pokemon.generation,
                    evolutionStage: pokemon.evolutionStage,
                    familyId: pokemon.familyId,
                    type1: pokemon.type1,
                    type2: pokemon.type2,
                    statTotal:pokemon.statTotal,
                    atk: pokemon.atk,
                    sta: pokemon.sta,
                    legendary: pokemon.legendary,
                    cp40: pokemon.cp40,
                    cp39: pokemon.cp39
            }})
         

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    async getPokemonByIdData(id: number): Promise<PokemonInputDTO[]>{

        try {
            const result = await this.getConnection()
           .select("*")
           .where('id', id)
           .into(this.TABLE_NAME.Pokemon)
      
            
            if(!result.length){
                throw new NotFoundError("Not found")
            }
     
            return result.map((pokemon: PokemonOutputDTO) => {
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    generation: pokemon.generation,
                    evolutionStage: pokemon.evolutionStage,
                    familyId: pokemon.familyId,
                    type1: pokemon.type1,
                    type2: pokemon.type2,
                    statTotal:pokemon.statTotal,
                    atk: pokemon.atk,
                    sta: pokemon.sta,
                    legendary: pokemon.legendary,
                    cp40: pokemon.cp40,
                    cp39: pokemon.cp39
            }})
         

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    async getPokemonFilterOrderPageData(nameOrtype: string, sort:any, order: string, offset: number): Promise<PokemonInputDTO[]>{

        try {
           const result = await this.getConnection()
           .where('name', "like", `%${nameOrtype}%`)
           .orWhere('type_1', "like", `%${nameOrtype}%`)
           .orWhere('type_2', "like", `%${nameOrtype}%`)
           .into(this.TABLE_NAME.Pokemon)
           .orderBy(sort, order)
           .limit(15)
           .offset(offset)
         
            if(!result.length){
                throw new NotFoundError("Not found")
            }
     
            return result.map((pokemon: PokemonOutputDTO) => {
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    generation: pokemon.generation,
                    evolutionStage: pokemon.evolutionStage,
                    familyId: pokemon.familyId,
                    type1: pokemon.type1,
                    type2: pokemon.type2,
                    statTotal:pokemon.statTotal,
                    atk: pokemon.atk,
                    sta: pokemon.sta,
                    legendary: pokemon.legendary,
                    cp40: pokemon.cp40,
                    cp39: pokemon.cp39
            }})
         

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }
}